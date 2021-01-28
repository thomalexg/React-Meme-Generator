import React, { useState } from 'react';
import '../App.css';
import Download from './Download';
import Form from './Form.js';
import Meme from './Meme';

export default function App() {
  const dataCategories = localStorage.getItem('categories');
  const dataTop = localStorage.getItem('top');
  const dataBtm = localStorage.getItem('btm');

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [url, setUrl] = useState(
    'https://api.memegen.link/images/awesome/create_your_own/meme',
  );
  const [categorie, setCategorie] = useState('awesome');
  const [dwnMessage, setDwnMessage] = useState('');
  const [categorieStr, setCategorieStr] = useState(
    dataCategories ? dataCategories : '',
  );
  const [topStr, setTopStr] = useState(dataTop ? dataTop : '');
  const [btmStr, setBtmStr] = useState(dataBtm ? dataBtm : '');
  // const [dataCategories, setDataCategories] = useState(
  //   JSON.parse(localStorage.getItem('categories')),
  // );
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
        topStr={topStr}
        setTopStr={setTopStr}
        btmStr={btmStr}
        setBtmStr={setBtmStr}
        categorieStr={categorieStr}
        setCategorieStr={setCategorieStr}
      />
      {/* {dataCategories}
      {localStorage.categories} */}
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
      <Download
        url={url}
        dwnMessage={dwnMessage}
        setDwnMessage={setDwnMessage}
      />
    </div>
  );
}
