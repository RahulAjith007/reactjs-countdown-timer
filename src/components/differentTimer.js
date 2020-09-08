import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        hours:0 ,
        minutes: 1,
        seconds: 5,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes, hours } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                  this.setState({
                    hours: hours-1,
                    minutes:60
                  })
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
if(hours ===0 && minutes === 0 && seconds === 0){
  clearInterval(this.myInterval)
}

        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds, hours } = this.state
        return (
            <div>
                { hours ===0 && minutes === 0 && seconds === 0
                    ? <h1>Busted!</h1>
                    : <h1>Time Remaining:{hours}:{minutes< 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}




                                        //timer 



                                        import React,{useRef, useState, useEffect} from 'react';

                                        const App = () => {
                                            const [timerDays, setTimerDays] = useState('00');
                                            const [timerHours, setTimerHours] = useState('00');
                                            const [timerMinutes, setTimerMinutes] = useState('00');
                                            const [timerSeconds, setTimerSeconds] = useState('00');
                                        
                                        
                                        
                                        let interval = useRef();
                                        
                                        
                                        const startTimer = () => {
                                            //Give below the railway time and Date
                                            const countDownDate = new Date("sept 1, 2020 10:59:00").getTime();
                                        
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