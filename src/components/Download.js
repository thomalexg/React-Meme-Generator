import React from 'react';

export default function Download(props) {
  // const download = (e) => {
  //   fetch(props.url, {
  //     method: 'GET',
  //     headers: {},
  //   })
  //     .then((response) => {
  //       response.arrayBuffer().then(function (buffer) {
  //         const url = window.URL.createObjectURL(new Blob([buffer]));
  //         const link = document.createElement('a');
  //         link.href = url;
  //         link.setAttribute('download', 'image.png'); //or any other extension
  //         document.body.appendChild(link);
  //         link.click();
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const download = async () => {
    try {
      const response = await fetch(props.url, {
        method: 'GET',
        headers: {},
      });
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'image.png');
        document.body.appendChild(link);
        link.click();
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="download">
      <button onClick={() => download()}>Download meme!</button>
      {props.dwnMessage}
    </div>
  );
}
