import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
`

interface HangmanWordProps {
    word: string
    guessedLetters: string[]
    reveal: boolean
}

export default function HangmanWord({reveal, word, guessedLetters,}: HangmanWordProps) {
    return <Wrapper>{word.split("").map((letter, index) => (<span style={{borderBottom: '0.1em solid blue', height: '80px'}} key={index}
    >
    <span style={{visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden', color: !guessedLetters.includes(letter) && reveal ? 'red' : 'blue',}}>{letter}</span>
    </span>))}</Wrapper>
}