import { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getRandomMeme = () => {
    const memesArray = allMemeImages.data.memes;
    let randomIndex = Math.floor(Math.random() * memesArray.length);
    if (!randomIndex) {
      randomIndex = 0;
    }
    const memeUrl = memesArray[randomIndex].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: memeUrl }));
  };

  return (
    <main>
      <div className="form">
        <input
          placeholder="Top Text"
          className="form--input"
          type="text"
        ></input>
        <input
          placeholder="Bottom Text"
          className="form--input"
          type="text"
        ></input>
        <button onClick={getRandomMeme} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <img className="meme--image" src={meme.randomImage} />
    </main>
  );
}
