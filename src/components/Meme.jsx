export default function Meme() {
  return (
    <main>
      <form className="form">
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
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
