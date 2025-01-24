import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { useQuiz } from "../wrapper";

export default function QuizSidebar() {
    const { changeIndex, currentIndexQuestion, questions } = useQuiz()
    return (
        <div className="">
            <Card>
                <CardContent className="flex flex-col items-center pt-8">
                    <span className="font-bold">5302413039</span>
                    <span>ALFIAN FAIZ</span>
                </CardContent>
            </Card>
            <Card className="mt-5">
                <CardHeader>
                    <CardTitle>Navigasi</CardTitle>
                </CardHeader>
                <CardContent>
                    <Pagination>
                        <PaginationContent className="flex flex-wrap justify-center gap-2">
                            {questions.map((q, idx) =>
                                <PaginationItem key={q.id}>
                                    <PaginationLink
                                        href="#"
                                        isActive={currentIndexQuestion == idx}
                                        onClick={() => changeIndex(idx)}>
                                        {idx + 1}
                                    </PaginationLink>
                                </PaginationItem>)}
                        </PaginationContent>
                    </Pagination>
                </CardContent>
            </Card>
        </div>
    )
}