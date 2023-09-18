import memesData from "../memesData";

export default function Meme() {
  const memesArray = memesData.data.memes;
  const getRandomMeme = () => {
    let randomIndex = Math.floor(Math.random() * 100);
    if (!randomIndex) {
      randomIndex = 0;
    }
    console.log(randomIndex);
    let meme = memesArray[randomIndex];
    return meme;
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
    </main>
  );
}
