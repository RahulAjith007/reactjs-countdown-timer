
import React,{useState, useEffect, useRef} from 'react';
import moment,{duration} from 'moment';


const Timer = ({quizTimer, timeOverResultModalHandler,fetchTime}) => {

    
    //timer States
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);
    const [timerSum, setTimerSum] = useState(null)
    //end timer states

//    if(isNaN(timerHours)===true && isNaN(timerMinutes)===true && isNaN(timerSeconds)===true ){
//     localStorage.setItem("timer", moment().add(localStorage.getItem("time") , 'hours').format())
//    }

    let interval = useRef();
    const currentInterval = interval.current
     
     
  const startTimer = () => {

    interval = setInterval(() => {
        const countDownDate = moment("2020-09-01 12:27:00")
        const now = moment().format()
        const distance = duration(countDownDate.diff(now))

        const hours = distance.hours();
        const minutes = distance.minutes();
        const seconds = distance.seconds();
        const timerAdd = hours + minutes + seconds

        if(distance < 0){
            clearInterval(currentInterval);
            
        }else{
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
            setTimerSum(timerAdd)
        }
    }, 1000)
}

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(currentInterval);
            
        }
    });
   
   //timerEnds
 
// timeOverResultModalHandler(timerSum);
// resultModalHandler(timerSeconds, timerMinutes, timerHours);

    // let timerInfo = ( )
    // if(timerHours===null && timerMinutes ===null && timerSeconds===null ){
    //     timerInfo=(<p>0:00:00</p>)
    // }

    return(
        <div className="Timer">
           <p>{timerHours}:{timerMinutes<10 ? `0${timerMinutes}` : timerMinutes}:{timerSeconds<10 ? `0${timerSeconds}`:timerSeconds}</p>
        {/* {timerHours && <p>{timerHours}</p>}: */}
        </div>
       
    )

    }

export default Timer;