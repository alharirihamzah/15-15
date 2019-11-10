import React, {
    useRef,
    useState,
    useEffect
} from 'react'

import moment from 'moment'

import {
    Wrapper,
    TopWrapper,
    HiddenText,
    TimeWrapper,
    TimeText,
    BottomWrapper,
    DateWrapper,
    DateText
} from './style'

const ONE_SEC = 1000
const ONE_MIN = 60000
const SOUND_SRC = 'https://www.myinstants.com/media/sounds/dj-airhorn-sound-effect-kingbeatz_1.mp3'

const Clock = () => {
    const [active, setActive] = useState(false)
    const [currentTime, setCurrentTime] = useState(null)

    const audioRef = useRef()

    useEffect(() => {
        getTime()

        setInterval(() => {
            getTime()
        }, ONE_SEC)
    }, [])

    useEffect(() => {
        if (active) {
            playSound()

            setTimeout(() => {
                playSound()
            }, 5000)
        }
    }, [active])

    const playSound = () => {
        audioRef.current.play()
    }

    const getTime = () => {
        const newTime = moment().toISOString()

        if (moment(newTime).get('h') === 15 && moment(newTime).get('m') === 15) {
            setActive(true)

            setTimeout(() => {
                setActive(false)
            }, ONE_MIN)
        }

        setCurrentTime(newTime)
    }

    const testSound = () => {
        playSound()
    }

    if (currentTime) {
        let hours = `${moment(currentTime).get('h')}`
        let minutes = `${moment(currentTime).get('m')}`

        if (hours.length === 1) {
            hours = `0${hours}`
        }

        if (minutes.length === 1) {
            minutes = `0${minutes}`
        }

        const clockParts = [
            hours,
            ':',
            minutes
        ]
    
        const datePart = moment(currentTime).format('dddd D MMM YY')
    
        return (
            <Wrapper>
                <TopWrapper>
                    <HiddenText onClick={testSound}>
                        Test
                    </HiddenText>

                    <TimeWrapper active={active}>
                        {
                            clockParts.map((part, idx) => {
                                return (
                                    <TimeText
                                        key={idx}
                                        separator={idx%2 !== 0}
                                    >
                                        {part}
                                    </TimeText>
                                )
                            })
                        }
                    </TimeWrapper>
                </TopWrapper>
                
                <BottomWrapper>
                    <DateWrapper>
                        <DateText>
                            {datePart}
                        </DateText>
                    </DateWrapper>
                </BottomWrapper>

                <audio
                    ref={audioRef}
                    src={SOUND_SRC}
                    type={'audio/mp3'}
                />
            </Wrapper>
        )
    } else {
        return null
    }
}

export default Clock