import React, {
    useState,
    useEffect
} from 'react'

import {
    Wrapper,
    InnerWrapper,
    QuoteText,
    QuoteAuthor
} from './style'

const ONE_MIN = 60000

const Quotes = () => {
    const [quote, setQuote] = useState(null)

    useEffect(() => {
        getRandomQuote()

        setInterval(() => {
            getRandomQuote()
        }, ONE_MIN)
    }, [])

    const getRandomQuote = () => {
        fetch('https://programming-quotes-api.herokuapp.com/quotes/random/lang/en')
            .then(response => response.json())
            .then(result => {
                setQuote({
                    text: result.en,
                    author: result.author
                })
            }).catch(error => {
                console.log('OUTPUT: getRandomQuote -> error', error)

                setQuote(null)
            })
    }

    if (quote) {
        return (
            <Wrapper>
                <InnerWrapper>
                    <QuoteText>
                        "{quote.text}"
                    </QuoteText>

                    <QuoteAuthor>
                        ~{quote.author}
                    </QuoteAuthor>
                </InnerWrapper>
            </Wrapper>
        )
    } else {
        return null
    }
}

export default Quotes