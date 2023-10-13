import styled from 'styled-components';
import './App.css';
import HangmanDrawing from './components/hangman-drawing';
import HangmanWord from './components/hangman-word';
import Keyboard from './components/keyboard';
import { useCallback, useEffect, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const HangmanPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 375px;
`;

const words = [
  'bahia',
  'futebol',
  'ronaldinho',
  'computador',
  'banana',
  'girassol',
  'bicicleta',
  'oceano',
  'guitarra',
  'sorvete',
  'montanha',
  'viagem',
  'piano',
  'carro',
  'livro',
  'floresta',
  'aventura',
  'dinossauro',
  'trabalho',
  'hamburguer',
  'elefante',
  'laboratório',
  'coração',
  'escola',
  'família',
  'celular',
  'chocolate',
  'astronauta',
  'universo'
];

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gamesWon, setGamesWon] = useState(0);
  const [gamesLost, setGamesLost] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const correctGuesses = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  const addGuessedLetters = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isGameEnded) return;
    setGuessedLetters([...guessedLetters, letter]);
  }, [guessedLetters, isGameEnded]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/) || isGameEnded) return;
      e.preventDefault();
      addGuessedLetters(key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [addGuessedLetters, guessedLetters, isGameEnded]);

  const isLoser = incorrectGuesses.length >= 6;
  const isWinner = wordToGuess.split('').every((letter) =>
    guessedLetters.includes(letter)
  );

  const resetGame = () => {
    setGuessedLetters([]);
    setIsGameEnded(false);
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWordToGuess(newWord);
    if (isWinner) {
      setGamesWon(gamesWon + 1);
    }
    if (isLoser) {
      setGamesLost(gamesLost + 1);
    }
  };

  return (
    <Wrapper>
      <HangmanPart>
        {isLoser && "Você perdeu. Tente novamente!"}
        {isWinner && "Você ganhou! Parabéns."}
        <h2> Jogo da Forca </h2>
        <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
        <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} word={wordToGuess} />
      </HangmanPart>
      <Keyboard
        activeLetters={correctGuesses}
        inactiveLetters={incorrectGuesses}
        addGuessedLetters={addGuessedLetters}
      />
      <p>Partidas Ganhas: {gamesWon} || Partidas Perdidas: {gamesLost}</p>
      <button onClick={resetGame}>Reiniciar Partida</button>
    </Wrapper>
  );
}

export default App;
