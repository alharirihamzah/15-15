import styled, { css, keyframes } from 'styled-components'

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    overflow: hidden;
    background: #434954;
    flex-direction: column;
    border-bottom: 2px solid #404551;
`

const TopWrapper = styled.div`
    width: 100%;
    margin: auto auto 0 auto;
`

const HiddenText = styled.p`
    top: 10px;
    opacity: 0;
    right: 20px;
    cursor: pointer;
    position: absolute;

    &:hover {
        opacity: 1;
    }
`

const neon = keyframes`
    from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;
    }
    to {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
    }
`

const TimeWrapper = styled.div`
    flex: 3;
    margin: auto;
    display: flex;
    
    p {
        &:first-child {
            margin-left: auto;
        }
    
        &:last-child {
            margin-right: auto;
        }

        ${({active}) => active && css`
            animation: ${neon} 1.5s ease-in-out infinite alternate;
        `}
    }
`

const TimeText = styled.p`
    margin: 0;
    color: #fff;
    display: flex;
    min-width: 27%;
    font-size: 20vw;
    font-weight: 600;
    transition: all 0.5s;
    justify-content: center;

    ${({separator}) => separator && css`
        min-width: unset;
        margin-top: -10px;
    `}
`

const BottomWrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto auto auto;
`

const DateWrapper = styled.div`
    margin: auto;
    display: flex;
`

const DateText = styled.p`
    margin: 0;
    color: #fff;
    font-size: 3vw;
    font-weight: 600;
`

export {
    Wrapper,
    TopWrapper,
    HiddenText,
    TimeText,
    TimeWrapper,
    BottomWrapper,
    DateWrapper,
    DateText
}