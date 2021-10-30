import ellipsis from '../images/icon-ellipsis.svg'
import work from '../images/icon-work.svg'

const StatusCard = () => {
    return (
        <div className="">
            <div className="bg-tk-orange rounded-2xl flex justify-end relative h-20 lis">
                <img src={work} alt="work"/>
            </div>
            <div className="bg-tk-blue-dark px-4 py-6 flex flex-col rounded-2xl text-white">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs">Work</span>
                    <img src={ellipsis} alt=".." />
                </div>
                <div className="flex justify-between items-center sm:flex-col sm:items-start">
                    <h1 className="text-2xl tracking-wide sm:text-6xl">103hrs</h1>
                    <p className="text-xs text-tk-blue-pale opacity-70">Last Month - 128 hrs</p>
                </div>
            </div>
        </div>
    )
}

export default StatusCard
