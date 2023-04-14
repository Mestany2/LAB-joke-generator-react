import { useState } from 'react';
import getJoke from '../api/jokeData';
import JokeGen from '../components/Jokes';

function Home() {
  // Everything that changes need a state 1. Button  2.Joke
  const [btnText, setBtnText] = useState('Get A Joke');
  const [joke, setJoke] = useState({});

  // To change the btn text
  const changeBtn = (text) => {
    setBtnText(text);
  };

  const getTheJoke = () => {
    getJoke().then((data) => {
      setJoke({
        setup: data.setup,
        punchline: data.delivery,
      });
      changeBtn('Get Punchline');
    });
  };
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome Home!</h1>
      <JokeGen joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get a New Joke' ? (
        <button type="button" onClick={getTheJoke}>{btnText}</button>
      ) : (
        <button type="button" onClick={() => changeBtn('Get a New Joke')}>{btnText}</button>
      )}
    </div>
  );
}

export default Home;
