"use client"

import { cn } from "@/lib/utils"
import { Chapter } from "@prisma/client"
import { useState, type FC } from "react"

interface ChapterCardProps {
  chapter: Chapter
  chapterIndex: number
}

const ChapterCard: FC<ChapterCardProps> = ({ chapter, chapterIndex }) => {
  const [success, setSuccess] = useState<boolean | null>(null)

  return (
    <div
      className={cn(
        "px-4 py-2 mt-2 flex rounded justify-between",
        success === null && "bg-secondary",
        success === false && "bg-red-500",
        success === true && "bg-green-500"
      )}
    >
      <h5>
        Chapter {chapterIndex + 1}: {chapter.name}
      </h5>
    </div>
  )
}
export default ChapterCard
