import { Tecnologia } from "@core";
import Cabecalho from "../shared/Cabecalho";
import Tecnologias from "../tecnologias/Tecnologias";



  export interface PrincipalProps{
    tecnologias:Tecnologia[]
  }


export default  function Principal(props:PrincipalProps){
  return(
    <div className="flex flex-col items-center h-[500px]
    bg-[url('/principal.jpg')] bg-cover bg-center">

<Cabecalho/>
 <div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
   <div className="flex flex-col  items-center gap-1">
<h1 className="flex gap-3 items-center">
  <span className="text-3xl sm:text-3xl font-bold text-white text-center">
  Maria Muniz
  </span>
  </h1>
  <h2 className="text-zinc-500 text-center">Desenvolvedora</h2>
 
  </div>

  <Tecnologias lista={props.tecnologias}/>

  </div>
  
  </div>
   
  )
}