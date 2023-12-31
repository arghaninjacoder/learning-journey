import { getAuthSession } from "@/lib/auth"
import type { FC } from "react"
import { redirect } from "next/navigation"
import { Info } from "lucide-react"
import CreateCourseForm from "@/components/CreateCourseForm"

interface pageProps {}

const CreatePage: FC<pageProps> = async ({}) => {
  const session = await getAuthSession()
  if (!session?.user) {
    return redirect("/gallery")
  }

  return (
    <div className="flex flex-col items-start max-w-xl mx-auto px-8 my-16 sm:px-0">
      <h1 className="self-center text-3xl font-bold text-center sm:text-6xl">
        Learning Journey
      </h1>

      <div className="flex p-4 mt-5 border-none bg-secondary">
        <Info className="h-12 w-12 mr-3 text-blue-400" />
        <div>
          Enter in a course title, or what you want to learn about. Then enter a
          list of units, which are the specifics you want to learn. And our AI
          will generate a course for you.
        </div>
      </div>

      <CreateCourseForm />
    </div>
  )
}
export default CreatePage
