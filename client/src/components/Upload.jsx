import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-size: 18px;
`;
const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  padding: 5px;
  border-radius: 4px;
  outline: none;
  background-color: transparent;

  :focus {
    border: 1px solid ${({ theme }) => theme.textSoft};
    color: ${({ theme }) => theme.text};
  }
`;
const Desc = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  padding: 5px;
  border-radius: 4px;
  outline: none;
  background-color: transparent;

  :focus {
    border: 1px solid ${({ theme }) => theme.textSoft};
    color: ${({ theme }) => theme.text};
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const Button = styled.button`
  width: fit-content;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  color: white;
  background-color: #065fd4;
`;
const Upload = () => {
  const [video, setVideo] = useState(undefined);
  const [img, setImg] = useState(undefined);
  const [imgPercent, setImgPercent] = useState(0);
  const [videoPercent, setVideoPercent] = useState(0);
  const [inputs, setInputs] = useState({});
  const [tags, setTags] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleTags = (e) => {
    setTags(e.target.value.split(','));
  };

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        urlType === 'imgUrl'
          ? setImgPercent(Math.round(progress))
          : setVideoPercent(Math.round(progress));

        console.log('Upload is ' + progress + '% done');

        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
          console.log('File available at', downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    video && uploadFile(video, 'videoUrl');
  }, [video]);
  useEffect(() => {
    img && uploadFile(img, 'imgUrl');
  }, [img]);

  const navigate = useNavigate();
  const handleUpload = async (e) => {
    e.preventDefault();
    const res = await axios.post('/videos', { ...inputs, tags });

    res.status === 200 && navigate(`/video/${res.data._id}`);
  };
  return (
    <Wrapper>
      <Title>Upload New Video</Title>
      <Label>Video :</Label>
      {videoPercent > 0 ? (
        'Uploading: ' + videoPercent + ' %'
      ) : (
        <Input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
        />
      )}
      <Input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
      <Desc
        placeholder="Description..."
        rows={4}
        name="desc"
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Separate the tags with comma."
        onChange={handleTags}
      />
      <Label>Image :</Label>
      {imgPercent > 0 ? (
        'Uploading: ' + imgPercent + ' %'
      ) : (
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setImg(e.target.files[0])}
        />
      )}
      <BtnContainer>
        <Button onClick={handleUpload}>Upload</Button>
      </BtnContainer>
    </Wrapper>
  );
};

export default Upload;
