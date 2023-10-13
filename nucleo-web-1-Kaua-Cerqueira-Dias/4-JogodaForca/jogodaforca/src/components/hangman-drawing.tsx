import styled from "styled-components";

const Base = styled.div`
    height: 10px;
    width: 250px;
    background: blue;
`

const VerticalLine = styled.div`
    height: 250px;
    width: 10px;
    background: blue;
`

const HorizontalLine = styled.div`
    height: 10px;
    width: 190px;
    background: blue;
    position: absolute;
    right: 0;
    top: 0; 
`

const VerticalLineSmall = styled.div`
    height: 40px;
    width: 10px;
    background: blue;
    position: absolute;
    right: -10px;
`

const Head = styled.div`
    height: 30px;
    width: 30px;
    border: 8px solid blue;
    border-radius: 50%;
    background: blue;
    position: absolute;
    right: -28px;
    top: 40px;  
`

const Body = styled.div`
    height: 80px;
    width: 10px;
    background: blue;
    position: absolute;
    right: -10px;
    top: 70px;  
`

const RightArm = styled.div`
    height: 10px;
    width: 50px;
    background: blue;
    position: absolute;
    right: -50px;
    top: 90px;  
    rotate: -30deg;
`

const LeftArm = styled.div`
    height: 10px;
    width: 50px;
    background: blue;
    position: absolute;
    right: -10px;
    top: 90px;  
    rotate: 30deg;
`

const RightLeg = styled.div`
    height: 10px;
    width: 50px;
    background: blue;
    position: absolute;
    right: -10px;
    top: 150px;  
    rotate: -30deg;
`

const LeftLeg = styled.div`
    height: 10px;
    width: 50px;
    background: blue;
    position: absolute;
    right: -50px;
    top: 150px;  
    rotate: 30deg;
`

const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg]

interface HangmanDrawingProps{
    numberOfGuesses: number
}

export default function HangmanDrawing({ numberOfGuesses, }: HangmanDrawingProps) {
    return (
    <div style={{
        position: 'relative', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',    
        }}>    
        {bodyParts.slice(0, numberOfGuesses).map((BodyParty, index) => {
            return <BodyParty key={index}/>
            })}
        <VerticalLineSmall />   
        <HorizontalLine />
        <VerticalLine />
        <Base />
    </div>
    )
}