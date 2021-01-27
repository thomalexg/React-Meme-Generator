import React, { useState } from 'react';
import '../App.css';
import Form from './Form.js';
import Meme from './Meme';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [url, setUrl] = useState(
    'https://api.memegen.link/images/awesome/create_your_own/meme',
  );
  const [categorie, setCategorie] = useState('awesome');
  return (
    <div className="App">
      <Form
        topText={topText}
        setTopText={setTopText}
        bottomText={bottomText}
        setBottomText={setBottomText}
        url={url}
        setUrl={setUrl}
        categorie={categorie}
        setCategorie={setCategorie}
      />
      <Meme
        url={url}
        setUrl={setUrl}
        topText={topText}
        setTopText={setTopText}
        bottomText={bottomText}
        setBottomText={setBottomText}
        categorie={categorie}
        setCategorie={setCategorie}
      />
    </div>
  );
}
