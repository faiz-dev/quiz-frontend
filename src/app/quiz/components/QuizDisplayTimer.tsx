'use client'

import { zeroPad } from "@/lib/utils"
import { useTimer } from "react-timer-hook"
import { TimerData } from "../models"
import { useQuiz } from "../wrapper"

export default function QuizDisplayTimer() {
    const {quizInfo, setIsTimeout} = useQuiz()
    const {start, duration} = quizInfo.timerData
    const expired = new Date(start.getTime() + (duration * 60000))
    const { seconds, hours, minutes } = useTimer({ expiryTimestamp: expired, onExpire: () => {
        alert("Berakhir")
        setIsTimeout(true)
    } })

    return <div className="text-right flex flex-col">
        <span>Waktu Pengerjaan</span>
        <span className={'text-xl font-bold ' + (minutes < 5 ? 'text-red-500' : '')}>{zeroPad(hours, 2)}:{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>
    </div>
}