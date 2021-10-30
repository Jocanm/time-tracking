import profile from '../images/image-jeremy.png'

const ProfileCard = ({ setTime, time }) => {



    return (
        <div className="w-11/12 h-44 mb-40">
            <div className="bg-tk-purple flex justify-center">
                <img src={profile} alt="perfil" />
                <div className="flex flex-col">
                    <p>Report for</p>
                    <p>Jeremy Robson</p>
                </div>
            </div>
            <div className="bg-tk-blue-dark">
                <button onClick={() => { setTime('daily') }}>Daily</button>
                <button onClick={() => { setTime('weekly') }}>Weekly</button>
                <button onClick={() => { setTime('monthly') }}>Monthly</button>
            </div>
        </div>
    )
}

export default ProfileCard
