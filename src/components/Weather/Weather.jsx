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

const CITY = 'kalmar'
const TWELVE_HOURS = 60000 * 60 * 6
const ACCESS_KEY = 'd35f9538c1106637eb2baf799519ee08'

const Weather = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        getWeatherData()

        setInterval(() => {
            getWeatherData()
        }, TWELVE_HOURS)
    }, [])

    const getWeatherData = () => {
        fetch(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${CITY}`)
            .then(response => response.json())
            .then(result => {
                if (result && result.current) {
                    const weatherPayload = buildWeatherPayload(result)
                    setData(weatherPayload)
                }
            }).catch(error => {
                console.log('OUTPUT: getWeatherData -> error', error)

                setData(null)
            })
    }

    const buildWeatherPayload = payload => {
        const {
            precip,
            wind_dir,
            pressure,
            wind_speed,
            temperature,
            weather_icons,
            weather_descriptions
        } = payload.current

        const icon = Array.isArray(weather_icons) && weather_icons[0] ? weather_icons[0] : null
        const descriptions = Array.isArray(weather_descriptions) ? weather_descriptions.join(', ') : ''

        const weatherPayload = {
            icon: icon,
            precip: precip,
            windDir: wind_dir,
            temp: temperature,
            pressure: pressure,
            windSpeed: wind_speed,
            descriptions: descriptions
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
                                src={data.icon}
                                alt={data.descriptions}
                            />
                        )
                    }

                    <Description>{data.descriptions}</Description>
                </ColumnWraper>

                <Temp>{data.temp}°C</Temp>

                <InnerWrapper>
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
                </InnerWrapper>
            </Wrapper>
        )
    } else {
        return null
    }
}

export default Weather