

import { useState } from "react"
import { CardInicial } from "./components/CardInicial"

export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handleMudarNotaAvaliacao(nota) {
    setNotaAvaliacao(nota)
  }

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

import ilustrationThankYou from "../assets/illustration-thank-you.svg"

export function CardFinal () {
    return (
      <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass max-w-103">
        <img className="mx-auto mb-6" src={ilustrationThankYou} alt="ilustration Thank You" />

        <p className="text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl mb-6">You selected {notaAvaliacao} out of 5</p>

        <h1 className="text-2xl font-bold mb-2.5 text-center">Thank You!</h1>

        <p className="text-sm text-light-grey leaing-1 text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    )  
  )
} 