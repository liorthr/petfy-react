// import { RocketIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export const AlertDemo = () => {
  return (
    <Alert>
      {/* <RocketIcon className="h-4 w-4" /> */}
      <AlertTitle>🥰Love in the place🥰</AlertTitle>
      <AlertDescription>
        You just date this dog
      </AlertDescription>
    </Alert>
  )
}
