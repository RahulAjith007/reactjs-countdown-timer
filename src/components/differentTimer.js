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