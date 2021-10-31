import profile from '../images/image-jeremy.png'

const ProfileCard = ({ setTime, time }) => {



    return (
        <div className="w-11/12 h-44 mb-20 sm:mb-16 sm:w-auto sm:h-96 sm:mt-4 sm:mr-4 profile-card">
            <div className="bg-tk-purple flex justify-center items-center rounded-2xl py-8 relative top-6 sm:h-4/5 sm:flex-col info-cont sm:pr-10 sm:pl-4 sm:justify-between sm:items-start">
                <img
                    src={profile}
                    className="w-20 box-border rounded-full border-4 sm:ml-2"
                    alt="perfil"
                />
                <div className="flex flex-col ml-4 text-white sm:w-full">
                    <h1 className="text-sm text-gray-400 sm:text-xs">Report for</h1>
                    <h1 className="text-xl text-gray-300 sm:text-4xl">Jeremy Robson</h1>
                </div>
            </div>


            <div className="bg-tk-blue-dark rounded-2xl flex justify-evenly items-end h-20 pb-4 sm:flex-col sm:py-20 sm:items-start button-cont">
                <button
                    onClick={() => { setTime('daily') }}
                    className={`${time === 'daily' ? "text-white text-opacity-95" : "text-tk-blue-pale text-opacity-60"} ${time!=='daily'&&'hover:text-tk-blue-pale'}`}
                >
                    Daily
                </button>
                <button
                    onClick={() => { setTime('weekly') }}
                    className={`${time === 'weekly' ? "text-white text-opacity-95" : "text-tk-blue-pale text-opacity-60"} ${time!=='weekly'&&'hover:text-tk-blue-pale'}`}
                >
                    Weekly
                </button>
                <button
                    onClick={() => { setTime('monthly') }}
                    className={`${time === 'monthly' ? "text-white text-opacity-95" : "text-tk-blue-pale text-opacity-60"} ${time!=='monthly'&&'hover:text-tk-blue-pale'}`}
                >
                    Monthly
                </button>
            </div>
        </div>
    )
}

export default ProfileCard
