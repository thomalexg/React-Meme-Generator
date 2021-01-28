import React from 'react';

export default function Form(props) {
  return (
    <div className="Form">
      <input
        className="CategorieBtn"
        type="text"
        placeholder="categorie"
        onChange={(e) => props.setCategorie(e.target.valuesplit(' ').join('_'))}
      ></input>
      <input
        className="TopBtn"
        type="text"
        placeholder="top text"
        onChange={(e) => props.setTopText(e.target.value.split(' ').join('_'))}
      ></input>
      <input
        className="BottomBtn"
        type="text"
        placeholder="bottom text"
        onChange={(e) =>
          props.setBottomText(e.target.value.split(' ').join('_'))
        }
      ></input>
      <button
        onClick={() => {
          props.setUrl(
            'https://api.memegen.link/images/' +
              props.categorie +
              '/' +
              props.topText +
              '/' +
              props.bottomText,
          );
          document.querySelector('.CategorieBtn').value = '';
          document.querySelector('.TopBtn').value = '';
          document.querySelector('.BottomBtn').value = '';
        }}
      >
        Create meme!
      </button>
      {/* {props.url} */}
    </div>
  );
}
