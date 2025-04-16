

import { useState } from "react"
import { CardInicial } from "./components/CardInicial"

export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handleSubmit() {
    if(notaAvaliacao!== 0) {
      setSubmited(true)
      return
    }

    alert("Please, choose a note!")

  }

  return(
    submited === false ? (
      <CardInicial  handleMudarNota={handleMudarNotaAvaliacao} submited={handleSubmit}/>
    ) : (
      <CardFinal notaAvaliacao={notaAvaliacao}/>
    )
  )
}