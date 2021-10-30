import React from 'react'
import StatusCard from './StatusCard'

const StatusContainer = () => {
    return (
        <div className="flex flex-col">
            <StatusCard></StatusCard>
            <StatusCard></StatusCard>
            <StatusCard></StatusCard>
        </div>
    )
}

export default StatusContainer
