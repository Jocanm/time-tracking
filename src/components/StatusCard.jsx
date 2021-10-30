import { useEffect, useState } from 'react'
import ellipsis from '../images/icon-ellipsis.svg'
import work from '../images/icon-work.svg'
import play from '../images/icon-play.svg'
import study from '../images/icon-study.svg'
import exercise from '../images/icon-exercise.svg'
import social from '../images/icon-social.svg'
import self from '../images/icon-self-care.svg'

const StatusCard = ({title,timeframes,time}) => {

    const [rightInfo,setRigthInfo] = useState({})
    const [rightTime,setRightTime] = useState('')

    const [myClass,setMyClass] = useState('')
    const [rightLogo,setRighLogo] = useState(work)

    //Este efecto se encarga de escoger que tipo de intervalo de tiempo estamos analizando, ya sea dia, semana o mes
    useEffect(()=>{

        if(time === 'daily') {
            setRigthInfo(timeframes.daily); setRightTime('Last Day')
        }
        else if (time === 'weekly') {
            setRigthInfo(timeframes.weekly); setRightTime('Last Week')
        }
        else {
            setRigthInfo(timeframes.monthly); setRightTime('Last Month')
        }

    },[time])


    //Este efecto se encargará de elegir que tipo de fondo y logo irá dependiendo del titulo de la card
    useEffect(()=>{

        if(title === "Work") {
            setMyClass('bg-tk-orange')
            setRighLogo(work)
        }
        else if (title === "Play") {
            setMyClass('bg-tk-softblue')
            setRighLogo(play)
        }
        else if (title === "Study"){
            setMyClass('bg-tk-lightRed')
            setRighLogo(study)
        }
        else if (title === 'Exercise'){
            setMyClass('bg-tk-green')
            setRighLogo(exercise)
        }
        else if (title === 'Social'){
            setMyClass('bg-tk-violet')
            setRighLogo(social)
        }
        else{
            setMyClass('bg-tk-yellow')
            setRighLogo(self)
        }

    },[title])

    return (
        <div className="w-11/12 h-44">
            <div className={`${myClass} rounded-2xl flex justify-end h-16`}>
                <img src={rightLogo} alt="work"/>
            </div>
            <div className="bg-tk-blue-dark px-6 py-8 flex flex-col rounded-2xl text-white relative bottom-7">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs">{title}</span>
                    <img src={ellipsis} alt=".." />
                </div>
                <div className="flex justify-between items-center sm:flex-col sm:items-start">
                    <h1 className="text-2xl tracking-wide sm:text-6xl">{`${rightInfo.current}hrs`}</h1>
                    <p className="text-xs text-tk-blue-pale opacity-70">{rightTime} - {rightInfo.previous}</p>
                </div>
            </div>
        </div>
    )
}

export default StatusCard
