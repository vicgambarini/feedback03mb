import iconStar from "../assets/icon-star.svg"
import { InputButton } from "./inputButton"

export function CardInicial( {handleMudarNota, submit} ) {
    return (
    
        <div className="flex justify-between mb-6">
            <div className="flex justify-between mb-6">
                <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover: cursor-pointer" onClick={() => handleMudarNota(1)}/>
                <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold  focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13  hover:bg-orange hover:text-white hover: cursor-pointer" onClick={() => handleMudarNota(2)}/>
                <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold  focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13  hover:bg-orange hover:text-white hover: cursor-pointer" onClick={() => handleMudarNota(3)}/>
                <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold  focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13  hover:bg-orange hover:text-white hover: cursor-pointer" onClick={() => handleMudarNota(4)}/>
                <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13  hover:bg-orange hover:text-white hover: cursor-pointer" onClick={() => handleMudarNota(5)}/>
            </div>

        <button onClick={submit} className="bg-orange w-full uppercase tracking-1 font-bold rounded-3xl text-sm py-3 hover:bg-white hover:text-orange hover: cursor-pointer">Submit</button>
        </div>

    )
}