import styled from 'styled-components'

const AppWrapper = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: absolute;
    background: #434954;
`

const InnerWrapper = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
    width: 1;
    display: flex;
`

export {
    AppWrapper,
    InnerWrapper,
    Wrapper
}