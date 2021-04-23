import React from 'react';

export default function Meme(props) {
  return (
    <div className="Meme">
      <img className='img' alt="create inside joke" src={props.url} />
    </div>
  );
}
