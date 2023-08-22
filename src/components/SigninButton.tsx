"use client"

import type { FC } from "react"
import { Button } from "./ui/button"
import { signIn } from "next-auth/react"

interface SigninButtonProps {}

const SigninButton: FC<SigninButtonProps> = ({}) => {
  return (
    <Button variant="ghost" onClick={() => signIn("google")}>
      Sign In
    </Button>
  )
}
export default SigninButton
