'use client'
import React, { createContext, useContext, useState } from "react";
import { Question, QuizInfo, TimerData } from "./models";

type QuizContextProp = {
    quizInfo: QuizInfo,
    questions: Question[],
    currentIndexQuestion: number,
    currentIdQuestion?: string,
    changeIndex: (idx: number) => void,
    getCurrentQuestion: () => Question | null,
    isTimeout: boolean,
    setIsTimeout: (val: boolean) => void
}

const dummyQuestionData: QuizInfo = {
    title: "Ulangan harian 1 Software Engineering",
    description: "Ulangan harian Semester 4",
    timerData: {
        start: new Date(),
        duration: 0.5,
    },
}

const initialQuizContext: QuizContextProp = {
    quizInfo: dummyQuestionData,
    questions: [],
    currentIndexQuestion: 0,
    changeIndex: () => { },
    getCurrentQuestion: () => null,
    isTimeout: false,
    setIsTimeout: (val) => null
}

const QuizContext = createContext<QuizContextProp>(initialQuizContext)

const QuizWrapper = ({ children }: { children: React.ReactElement }) => {
    const [quizInfo, setQuizInfo] = useState<QuizInfo>({ ...dummyQuestionData })
    const [isTimeout, setIsTimeout] = useState<boolean>(false)
    const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0)
    const questions: Question[] = [
        {
            id: '1', choices: [
                { id: '1', text: 'Answer 1' },
                { id: '2', text: 'Answer 2' },
                { id: '3', text: 'Answer 3' },
                { id: '4', text: 'Answer 4' },
            ], questionText: 'Question 1'
        },
        {
            id: '2', choices: [
                { id: '1', text: 'Answer 1' },
                { id: '2', text: 'Answer 2' },
            ], questionText: 'Question 2'
        },
        {
            id: '3', choices: [
                { id: '1', text: 'Answer 1' },
                { id: '2', text: 'Answer 2' },
                { id: '3', text: 'Answer 3' },
            ], questionText: 'Question 3'
        }
    ]

    const changeIndex = (idx: number) => {
        if (idx < questions.length && idx >= 0 && !isTimeout) setCurrentIndexQuestion(idx)
    }

    const getCurrentQuestion = () => {
        return questions[currentIndexQuestion] ?? null
    }

    return <QuizContext.Provider value={{ quizInfo, currentIndexQuestion, questions, changeIndex, getCurrentQuestion, isTimeout, setIsTimeout }}>
        {children}
    </QuizContext.Provider>
}

const useQuiz = () => useContext(QuizContext)

export {
    useQuiz,
    QuizWrapper
}