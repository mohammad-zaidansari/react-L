import { useEffect, useState } from "react";

export default function Joker() {
  let URL = "https://official-joke-api.appspot.com/random_joke";

  let [joke, setJoke] = useState({});

  let getJokes = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    setJoke({
      setup: jsonResponse.setup,
      punchline: jsonResponse.punchline,
    });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      setJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    }
    getFirstJoke();
  }, []);

  return (
    <>
      <h3>Jokes!</h3>
      <h4>{joke.setup}</h4>
      <h4>{joke.punchline}</h4>
      <button onClick={getJokes}>Get Joke</button>
    </>
  );
}
