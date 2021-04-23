import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Form(props) {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.memegen.link/templates/')
      .then((res) => {
        setTemplates(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Form">
      <div>
        <select
          id="selectImg"
          onChange={(e) => {
            const category = e.target.value;
            props.setCategorie(e.target.value);
            props.setUrl('https://api.memegen.link/images/' + category + '/');
          }}
        >
          {templates.map((meme) => (
            <option key={meme.id} value={meme.id} name={meme.name}>
              {meme.name}
            </option>
          ))}
        </select>
        <input
          className="TopBtn"
          type="text"
          placeholder="top text"
          onChange={(e) =>
            props.setTopText(e.target.value.split(' ').join('_'))
          }
        />
        <input
          className="BottomBtn"
          type="text"
          placeholder="bottom text"
          onChange={(e) =>
            props.setBottomText(e.target.value.split(' ').join('_'))
          }
        />
        <button
          onClick={() => {
            console.log('categorie', props.categorie);
            props.setUrl(
              'https://api.memegen.link/images/' +
                props.categorie +
                '/' +
                props.topText +
                '/' +
                props.bottomText,
            );
            const newCatState =
              props.categorieStr + ' ' + props.categorie + ',';
            if (!props.categorieStr.includes(props.categorie)) {
              props.setCategorieStr(newCatState);
              localStorage.setItem('categories', newCatState);
            }
            const newTopState = props.topStr + ' ' + props.topText + ',';
            if (!props.topStr.includes(props.topText)) {
              props.setTopStr(newTopState);
              localStorage.setItem('top', newTopState);
            }
            const newBtmState = props.btmStr + ' ' + props.bottomText + ',';
            if (!props.btmStr.includes(props.bottomText)) {
              props.setBtmStr(newBtmState);
              localStorage.setItem('btm', newBtmState);
            }
            document.querySelector('.TopBtn').value = '';
            document.querySelector('.BottomBtn').value = '';
          }}
        >
          Create meme!
        </button>
      </div>
      <div>
        <p>Categories you searched for: {props.categorieStr}</p>
        <p>Top Text you entered: {props.topStr}</p>
        <p>Bottom Text you entered: {props.btmStr}</p>
      </div>
    </div>
  );
}
