import React from 'react'

import Clock from '../components/Clock'
import Quotes from '../components/Quotes'
import Weather from '../components/Weather'

import {
    AppWrapper,
    InnerWrapper,
    Wrapper
} from './style'

const App = () => {
    return (
        <AppWrapper>
            <InnerWrapper>
                <Clock />

                <Wrapper>
                    <Weather />
                    <Quotes />
                </Wrapper>
            </InnerWrapper>
        </AppWrapper>
    )
}

export default App
