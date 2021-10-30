import { useEffect, useState } from 'react'
import StatusContainer from './components/StatusContainer'
import ProfileCard from './components/ProfileCard'
import './App.css'

const Main = () => {

    const [data, setData] = useState([])
    const [time,setTime] = useState('weekly')

    useEffect(() => {

        const getData = async () => {

            const response = await fetch('./data/data.json')
            const data = await response.json()
            setData(data)
        }

        getData()
    }, [])


    return (
        <div className="w-screen h-full flex flex-col items-center justify-center px-4 mt-10">
            <ProfileCard setTime={setTime} time={time} />
            <StatusContainer data={data} time={time}/>
        </div>
    )
}

export default Main
