export type TimerData = {
    start: Date,
    duration: number,
}

export type QuizInfo = {
    title: string,
    description: string,
    timerData: TimerData,
}

export type Choice = {
    id: string,
    text: string,
    picture?: string,
}

export type Question = {
    id: string,
    text?: string,
    questionText: string,
    picture?: string,
    choices: Choice[]
}