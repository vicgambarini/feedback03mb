import ilustrationThankYou from "../assets/illustration-thank-you.svg"

export function CardFinal ({notaAvaliacao }) {
    return (
        <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass max-w-103">
          <img src={iconStar} alt="icon star" />
        

        <h1 className="text-2xl font-bold mb-2.5 ">How did we do?</h1>

        <p className="text-sm text-light-grey mb-6 leading-1">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        </div>
    )

}