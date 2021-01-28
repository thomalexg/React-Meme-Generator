import React from 'react';

export default function Form(props) {
  return (
    <div className="Form">
      <div>
        <input
          className="CategorieBtn"
          type="text"
          placeholder="categorie"
          onChange={(e) =>
            props.setCategorie(e.target.value.split(' ').join('_'))
          }
        ></input>
        <input
          className="TopBtn"
          type="text"
          placeholder="top text"
          onChange={(e) =>
            props.setTopText(e.target.value.split(' ').join('_'))
          }
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
            const newCatState = props.categorieStr + ' ' + props.categorie + ',';
            if (!props.categorieStr.includes(props.categorie)) {
              props.setCategorieStr(newCAtState);
              localStorage.setItem('categories', newCatState);
            }
            // if (!props.categorieStr.includes(props.categorie)) {
            //   props.setCategorieStr(
            //     props.categorieStr + ' ' + props.categorie + ',',
            //   );
            // }
            if (!props.topStr.includes(props.topText)) {
              props.setTopStr(props.topStr + ' ' + props.topText + ',');
            }
            if (!props.btmStr.includes(props.bottomText)) {
              props.setBtmStr(props.btmStr + ' ' + props.bottomText + ',');
            }
            document.querySelector('.CategorieBtn').value = '';
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
      {/* {props.url} */}
    </div>
  );
}
