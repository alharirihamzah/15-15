import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    overflow: hidden;
    padding: 30px 50px;
    background: #434954;
    border-right: 2px solid #404551;
`

const ColumnWraper = styled.div`
    flex: 1;
    margin: 35px;
    display: flex;
    margin-right: 0;
    flex-direction: column;
`

const Icon = styled.img`
    width: 50%;
    height: auto;
    margin: auto;
    border-radius: 50%;
`

const Description = styled.p`
    margin: 0;
    color: #fff;
    font-size: 2vw;
    font-weight: 500;
`

const InnerWrapper = styled.div`
    width: 75%;
    margin: auto;
    display: flex;
    flex-direction: column;
`

const Temp = styled.p`
    color: #fff;
    margin: auto;
    font-size: 4vw;
    font-weight: 600;
    padding: 0px 50px;
`

const RowWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;
`

const RowLabel = styled.p`
    margin: 0;
    color: #fff;
    font-size: 1.2vw;
    font-weight: 600;
`

const RowValue = styled.p`
    margin: 0;
    color: #fff;
    font-size: 1.2vw;
    font-weight: 400;
    margin-left: 10px;
`

export {
    Wrapper,
    ColumnWraper,
    Icon,
    Description,
    Temp,
    InnerWrapper,
    RowWrapper,
    RowLabel,
    RowValue
}