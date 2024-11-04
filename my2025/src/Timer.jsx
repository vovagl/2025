import { useEffect, useState } from "react";

function Timer() {
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        let timer = setInterval(() => {

            let expectedDay = new Date('2025-01-01T00:00:00').getTime();
            //let expectedDay = new Date('2024-11-03T13:41:00').getTime();
            let currentDay = new Date().getTime();
            let timeDifference = expectedDay - currentDay;
            if (timeDifference > 0) {
                setCountdown(timeDifference);
            } else {
                setCountdown(0);
                clearInterval(timer);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);


    let days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    if (days < 10) {
        days = `0${days}`;
    }
    let hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let seconds = Math.floor((countdown % (1000 * 60)) / 1000);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    const arrDays = ['02', '03', '04', 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54];
    let day = 'дней';
    for (let i = 0; i < arrDays.length; i++) {
        if (days === arrDays[i]) {
            day = 'дня'
        }
    }
    const arrDays1 = ['01', 21, 31, 41, 51];
    for (let i = 0; i < arrDays1.length; i++) {
        if (days === arrDays1[i]) {
            day = 'день'
        }
    }

    const arrHours = ['02', '03', '04', 22, 23];
    let hour = 'часов';
    for (let i = 0; i < arrHours.length; i++) {
        if (hours === arrHours[i]) {
            hour = 'часа'
        }
    }
    const arrHours1 = ['01', 21];
    for (let i = 0; i < arrHours1.length; i++) {
        if (hours === arrHours1[i]) {
            hour = 'час'
        }
    }

    const arrMinutes = ['01', 21, 31, 41, 51];
    let minute = 'минут';
    for (let i = 0; i < arrMinutes.length; i++) {
        if (minutes === arrMinutes[i]) {
            minute = 'минута'
        }
    }
    const arrMinutes1 = ['02', '03', '04', 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54];
    for (let i = 0; i < arrMinutes1.length; i++) {
        if (minutes === arrMinutes1[i]) {
            minute = 'минуты'
        }
    }

    const arrSeconds = [51, 41, 31, 21, '01']
    let second = 'секунд'
    for (let i = 0; i < arrSeconds.length; i++) {
        if (seconds === arrSeconds[i]) {
            second = 'секунда'
        }
    }
    const arrSeconds1 = ['02', '03', '04', 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54];
    for (let i = 0; i < arrSeconds1.length; i++) {
        if (seconds === arrSeconds1[i]) {
            second = 'секунды'
        }
    }

    return (
        <div className="container">
            {/*<img src="christmas_girls_14.jpg" alt="#" />*/}
            <div className="timer">
                <h1>До Нового Года:</h1>
            </div>


            <h4>{`${days} ${day} ${hours} ${hour} ${minutes} ${minute} ${seconds} ${second}`} </h4>



        </div>
    );
};
export default Timer;