import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { useQuiz } from "../wrapper";

export default function QuizMainContent() {
    const { getCurrentQuestion, currentIndexQuestion, changeIndex } = useQuiz()
    const question = getCurrentQuestion()

    return <div className="p-5 pt-0">
        {question?.text &&
            <div className="story">
                {question?.text}
            </div>
        }
        <div className="question mt-3">
            {question?.questionText}
        </div>
        <div className="choices flex flex-col gap-3 mt-2 max-w-[800px] min-h-[300px]">
            {question?.choices.map((ch, idx) => (
                <label key={idx} htmlFor="choice-one" className="grid grid-cols-[20px_1fr] gap-3 items-top border-2 border-transparent px-2 py-2 rounded-sm hover:border-slate-500 border-dotted">
                    <input type="radio" name="answer" value={ch.id} id="choice-one" className="w-5 h-5 border-2 accent-slate-800" />
                    <span>{ch.text}</span>
                </label>
            ))}
        </div>
        <div className="flex mt-10 justify-between">
            <div className="flex gap-4">
                <Button onClick={() => changeIndex(currentIndexQuestion - 1)}><ChevronLeft />Sebelumnya</Button>
                <Button onClick={() => changeIndex(currentIndexQuestion + 1)}>Selanjutnya <ChevronRight /></Button>
            </div>
            <div className="flex gap-2">
                <Button size="icon"><ZoomIn /></Button>
                <Button size="icon"><ZoomOut /></Button>
            </div>
        </div>
    </div>
}