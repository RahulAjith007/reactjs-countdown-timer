import React,{useRef, useState, useEffect} from 'react';

const App = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');



let interval = useRef();


const startTimer = () => {
    //Give below the railway time and Date
    const countDownDate = new Date("Aug 29, 2020 17:25:00").getTime();

    interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours =  Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        const minutes = Math.floor((distance % (1000 * 60 * 60))/(1000*60));
        const seconds = Math.floor((distance % (1000 * 60))/1000);

        if(distance < 0){
            clearInterval(interval.current);
        }else{
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }

    }, 1000)
}

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    return(
        <div style={{textAlign: 'center', fontSize: 50, fontWeight: 600}}>
            <p>{timerDays} : {timerHours} : {timerMinutes}: {timerSeconds}</p>
        </div>
    )

    }

export default App;