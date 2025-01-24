'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious } from "@/components/ui/pagination";
import { Label, RadioGroup } from "@radix-ui/react-context-menu";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { Separator } from "@radix-ui/react-separator";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import QuizSidebar from "./components/QuizSidebar";
import QuizMainContent from "./components/QuizMainContent";
import QuizHeader from "./components/QuizHeader";
import { useState } from "react";
import { QuizWrapper } from "./wrapper";

export default function Quiz() {
    const quizData = {
        title: "Ulangan harian 1 Software Engineering",
        description: "Ulangan harian Semester 4",
        timerData: {
            start: new Date(),
            duration: 10,
        },
        questions: [
            { noSoal: 1 },
            { noSoal: 2 }
        ]
    }
    const [currentNumber, setCurrentNumber] = useState(0)

    return <QuizWrapper>
        <div className=" max-w-[1200px] mx-auto p-10">
            <Card>
                <CardHeader>
                    <QuizHeader/>
                    <Separator />
                </CardHeader>
                <CardContent>
                    <div className="sm:grid md:grid-cols-[226px_1fr]">
                        <QuizSidebar />
                        <QuizMainContent />
                    </div>
                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>
        </div>
    </QuizWrapper>



}