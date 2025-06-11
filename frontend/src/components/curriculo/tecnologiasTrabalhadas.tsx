import {Tecnologia} from "@core"

export interface TecnologiasTrabalhadasProps{
  lista:Tecnologia[]
}



export default function TecnologiasTrabalhadas(props:TecnologiasTrabalhadasProps){
return props.lista ?(
<div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black rounded-2xl border-zinc-800">
  <div className="flex justify-center gap-x-3 flex-wrap">
  {props.lista.map((tecnologia)=>( 
     <div key={tecnologia.id}>
       <span className=" text-red-500 font-bold">#</span>
      <span className="text-white">{tecnologia.nome}</span>
     </div>
  ))}
</div>

</div>
):null
}