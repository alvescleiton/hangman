import { AlphabetProvider } from "../../hooks/AlphabetContext"
import { WordProvider } from "../../hooks/WordContext"
import { EndGameProvider } from "../../hooks/EndGameContext"

type ContextListType = {
  children: React.ReactNode
}

const ContextList = ({ children }: ContextListType) => {
  return (
    <WordProvider>
      <AlphabetProvider>
        <EndGameProvider>
          {children}
        </EndGameProvider>
      </AlphabetProvider>
    </WordProvider>
  )
}

export default ContextList