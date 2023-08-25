"use client"

import { Chapter, Course, Unit } from "@prisma/client"
import type { FC } from "react"
import ChapterCard from "./ChapterCard"
import { Separator } from "./ui/separator"
import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type ConfirmChaptersProps = {
  course: Course & {
    units: (Unit & {
      chapters: Chapter[]
    })[]
  }
}

const ConfirmChapters: FC<ConfirmChaptersProps> = ({ course }) => {
  return (
    <div className="w-full mt-4">
      {course.units.map((unit, unitIndex) => {
        return (
          <div key={unit.id} className="mt-5">
            <h2 className="text-sm uppercase text-secondary-foreground/60">
              Unit {unitIndex + 1}
            </h2>
            <h3 className="text-2xl font-bold">{unit.name}</h3>
            <div className="mt-3">
              {unit.chapters.map((chapter, chapterIndex) => {
                return (
                  <ChapterCard
                    key={chapter.id}
                    chapter={chapter}
                    chapterIndex={chapterIndex}
                  />
                )
              })}
            </div>
          </div>
        )
      })}

      <div className="flex items-center justify-center mt-4">
        <Separator className="flex-[1]" />
        <div className="flex items-center mx-4">
          <Link
            href="/create"
            className={buttonVariants({
              variant: "secondary",
            })}
          >
            <ChevronLeft className="h-4 w-4 mr-2" strokeWidth={4} />
            Back
          </Link>

          <Button
            type="button"
            className="ml-4 font-semibold"
            onClick={() => {}}
          >
            Generate
            <ChevronRight className="h-4 w-4 ml-2" strokeWidth={4} />
          </Button>
        </div>
        <Separator className="flex-[1]" />
      </div>
    </div>
  )
}
export default ConfirmChapters