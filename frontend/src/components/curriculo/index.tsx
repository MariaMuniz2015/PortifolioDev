import {Tecnologia} from "@core"
import TecnologiasTrabalhadas from "./tecnologiasTrabalhadas"
import Experiencia from "./Experiencia"
import MiniCv from "./MiniCv"

export interface CurriculoProps{
  tecnologias:Tecnologia[]
}



export default function Curriculo(props: CurriculoProps){
return(
   <div className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
     <MiniCv/>
    <Experiencia />
  <TecnologiasTrabalhadas lista={props.tecnologias} />
  </div>
)
}