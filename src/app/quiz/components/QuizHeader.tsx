'use client'
import { QuizInfo } from "../models";
import { useQuiz } from "../wrapper";
import QuizDisplayTimer from "./QuizDisplayTimer";

export default function QuizHeader() {
    const { quizInfo, currentIndexQuestion } = useQuiz()
    const {title, description, timerData} = quizInfo
    return <div className="grid grid-cols-3">
        <div className="flex flex-col">
            <span className="font-bold">{title}</span>
            <span>{description}</span>
        </div>
        <div className="text-center flex flex-col">
            <span>Nomor Soal</span>
            <span className="text-2xl font-bold">{currentIndexQuestion + 1}</span>
        </div>
        <QuizDisplayTimer />
    </div>
}