import React from 'react'
import StatusCard from './StatusCard'

const StatusContainer = ({data,time}) => {


    return (
        <div className="flex flex-col items-center w-full mr-3">
            {
                data.map(e=>{
                    return (
                        <StatusCard {...e} time={time}/>
                    )
                })
            }
        </div>
    )
}

export default StatusContainer
