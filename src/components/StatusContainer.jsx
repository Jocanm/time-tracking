import React from 'react'
import StatusCard from './StatusCard'

const StatusContainer = ({data,time}) => {


    return (
        <div className="flex flex-col items-center w-full sm:grid grid-cols-3 grid-rows-2 gap-y-12 sm:ml-2">
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
