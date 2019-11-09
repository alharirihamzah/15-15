import styled from 'styled-components'

const Wrapper = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    overflow: hidden;
    background: #434954;
    flex-direction: column;
`

const InnerWrapper = styled.div`
    width: 75%;
    margin: auto;
    display: flex;
    flex-direction: column;
`

const QuoteText = styled.p`
    color: #fff;
    margin-top: 0;
    font-weight: 500;
    font-size: 1.5vw;
`

const QuoteAuthor = styled.p`
    color: #fff;
    font-weight: 500;
    font-size: 1.5vw;
    font-style: italic;
    margin: 0 0 0 auto;
`

export {
    Wrapper,
    InnerWrapper,
    QuoteText,
    QuoteAuthor
}