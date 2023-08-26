"use client"

import { cn } from "@/lib/utils"
import { Chapter } from "@prisma/client"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import React, { useState, type FC } from "react"
import { useToast } from "./ui/use-toast"

interface ChapterCardProps {
  chapter: Chapter
  chapterIndex: number
}

export type ChapterCardHandler = {
  triggerLoad: () => void
}

const ChapterCard: FC<ChapterCardProps> = React.forwardRef<
  ChapterCardHandler,
  ChapterCardProps
>(({ chapter, chapterIndex }, ref) => {
  const { toast } = useToast()
  const [success, setSuccess] = useState<boolean | null>(null)

  const { mutate: getChapterInfo, isLoading } = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/chapter/getInfo", {
        chapterId: chapter.id,
      })
      return response.data
    },
  })

  // trigger load is called on click of generate btn in ConfirmChapters component
  React.useImperativeHandle(ref, () => ({
    async triggerLoad() {
      getChapterInfo(undefined, {
        onSuccess: () => {
          setSuccess(true)
        },
        onError: (error) => {
          console.log(error)
          setSuccess(false)
          toast({
            title: "Error",
            description: "There was an error loading your chapter",
            variant: "destructive",
          })
        },
      })
    },
  }))

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
})

ChapterCard.displayName = "ChapterCard"

export default ChapterCard
