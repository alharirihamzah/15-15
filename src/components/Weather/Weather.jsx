import React, {
    useState,
    useEffect
} from 'react'

import {
    Wrapper,
    ColumnWraper,
    Icon,
    Description,
    Temp,
    InnerWrapper,
    RowWrapper,
    RowLabel,
    RowValue
} from './style'

// const CITY = 'kalmar'
const CITY_KEY = 308266
const TWELVE_HOURS = 60000 * 60 * 6
// const ACCESS_KEY = 'd35f9538c1106637eb2baf799519ee08'
const ACCESS_KEY = '4qEsaEEVHzWeu62poAuWYVflLsZtOHLV'
const ICON_SRC = 'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/{{NUMBER}}-s.png'

const Weather = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        getWeatherData()

        setInterval(() => {
            getWeatherData()
        }, TWELVE_HOURS)
    }, [])

    const getWeatherData = () => {
        // fetch(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${CITY}`)
        fetch(`https://dataservice.accuweather.com/currentconditions/v1/${CITY_KEY}?apikey=${ACCESS_KEY}`)
            .then(response => response.json())
            .then(result => {
                if (Array.isArray(result) && result.length) {
                    const weatherPayload = buildWeatherPayload(result[0])
                    setData(weatherPayload)
                }
            }).catch(error => {
                console.log('OUTPUT: getWeatherData -> error', error)

                setData(null)
            })
    }

    const buildWeatherPayload = payload => {        
        const {
            WeatherIcon,
            WeatherText,
            Temperature,
        } = payload

        const icon = `${WeatherIcon}`.length === 1 ? `0${WeatherIcon}` : `${WeatherIcon}`
        const temp = Temperature && Temperature.Metric ? Temperature.Metric.Value : null

        const weatherPayload = {
            icon: icon,
            temp: temp,
            descriptions: WeatherText
        }

        return weatherPayload
    }

    if (data) {
        return (
            <Wrapper>
                <ColumnWraper>
                    {
                        data.icon && (
                            <Icon
                                alt={data.descriptions}
                                src={ICON_SRC.replace('{{NUMBER}}', data.icon)}
                            />
                        )
                    }

                    <Description>{data.descriptions}</Description>
                </ColumnWraper>

                <Temp>{data.temp}°C</Temp>

                {/* <InnerWrapper>
                    <RowWrapper>
                        <RowLabel>Wind: </RowLabel>
                        <RowValue>{data.windSpeed} kmph - {data.windDir}</RowValue>
                    </RowWrapper>

                    <RowWrapper>
                        <RowLabel>Precip: </RowLabel>
                        <RowValue>{data.precip} mm</RowValue>
                    </RowWrapper>

                    <RowWrapper>
                        <RowLabel>Pressure: </RowLabel>
                        <RowValue>{data.pressure} mb</RowValue>
                    </RowWrapper>
                </InnerWrapper> */}
            </Wrapper>
        )
    } else {
        return null
    }
}

export default Weather