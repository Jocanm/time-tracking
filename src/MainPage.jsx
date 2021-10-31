import { useEffect, useState } from 'react'
import StatusContainer from './components/StatusContainer'
import ProfileCard from './components/ProfileCard'
import './App.css'

const Main = () => {

    const [data, setData] = useState([])
    const [time, setTime] = useState('weekly')

    useEffect(() => {

        const getData = async () => {

            const response = await fetch('./data/data.json')
            const data = await response.json()
            setData(data)
        }

        getData()
    }, [])


    return (
        <div>
            <div className="w-screen h-full flex flex-col items-center justify-center px-4 mt-10 sm:flex-row sm:px-20 sm:py-20 mb-28 sm:mb-0">
                <ProfileCard setTime={setTime} time={time} />
                <StatusContainer data={data} time={time} />
            </div>
            <AboutThis />
        </div>

    )
}

const AboutThis = () => {
    return (
        <div className="flex justify-center text-sm text-white relative bottom-9">
            <span className="text-tk-blue-pale opacity-75 mr-1">
                Challenge by
            </span>
            <a href="https://www.frontendmentor.io/home" className="text-tk-violet mr-1"
            target="_blank"
            rel="noreferrer"
            >
                Frontend Mentor
            </a>
            <span className="text-tk-blue-pale opacity-75 mr-1">
                Coded by
            </span>
            <a href="https://github.com/Jocanm" className="text-tk-violet"
            target="_blank"
            rel="noreferrer"
            >
                Jose Angarita
            </a>
        </div>
    )
}

export default Main
