import react, { useState, useEffect } from "react";
import "./App.css";
import SmallCard from "./components/SmallCard";

function App() {
  const [longUrl, setLongUrl] = useState("");

  const data = [
    {
      lUrl: "https://youtube.com/",
      sUrl: "https://localhost/yt",
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold">Nicks URL Shortener</h1>
        <form>
          <input
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            type="text"
            placeholder="http://example.com/"
            className="flex-grow pl-5  bg-gray-400 text-sm rounded-md
           text-white placeholder-white "
          />
          <button
            type="submit"
            onClick={onSubmit}
            className="bg-gray-400 px-4 py-1 shadow-md 
          rounded-full my-2
        hover:shadow-xl active:scale-90 transition duration-150"
          >
            Shorten
          </button>
        </form>
        <section>
          {data.map((item) => {
            return <SmallCard key="1" lUrl={item.lUrl} sUrl={item.sUrl} />;
          })}
        </section>
      </header>
    </div>
  );
}

export default App;
