import { useEffect, useState } from 'react'
import StatusContainer from './components/StatusContainer'
import './App.css'

const Main = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const getData = async () => {

            const response = await fetch('./data/data.json')
            const data = await response.json()
            setData(data)
            console.log(data);
        }

        getData()
    }, [])


    return (
        <div>
            <StatusContainer/>
        </div>
    )
}

export default Main
