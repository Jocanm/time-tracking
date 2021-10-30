import profile from '../images/image-jeremy.png'

const ProfileCard = ({ setTime, time }) => {



    return (
        <div className="w-11/12 h-44 mb-16 mr-3">
            <div className="bg-tk-purple flex justify-center items-center rounded-2xl py-8 relative top-6">
                <img 
                src={profile} 
                className="w-20 box-border rounded-full border-4"
                alt="perfil" 
                />
                <div className="flex flex-col ml-4 text-white">
                    <h1 className="text-sm text-gray-400">Report for</h1>
                    <h1 className="text-xl text-gray-300">Jeremy Robson</h1>
                </div>
            </div>

            
            <div className="bg-tk-blue-dark rounded-2xl flex justify-evenly items-end h-20 pb-4">
                <button
                    onClick={() => { setTime('daily') }}
                    className={`${time==='daily'?"text-white text-opacity-95":"text-tk-blue-pale text-opacity-60"}`}
                >Daily</button>
                <button
                    onClick={() => { setTime('weekly') }}
                    className={`${time==='weekly'?"text-white text-opacity-95":"text-tk-blue-pale text-opacity-60"}`}
                >Weekly</button>
                <button
                    onClick={() => { setTime('monthly') }}
                    className={`${time==='monthly'?"text-white text-opacity-95":"text-tk-blue-pale text-opacity-60"}`}
                >Monthly</button>
            </div>
        </div>
    )
}

export default ProfileCard
