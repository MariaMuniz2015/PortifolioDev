import { Projeto } from "@core"
import Link from "next/link"
import Image from "next/image"


export interface ItemProjetoProps{
  projeto:Projeto
}

export default function ItemProjeto(props: ItemProjetoProps){
return(
<Link href={`/projeto/${props.projeto.id}`}>
<div className="relative rounded-2xl overflow-hidden min-w-64 min-h-64 border border-zinc-800">
  <Image src={props.projeto.imagens[0]} 
  alt={props.projeto.nome}
  fill objectFit="cover"/>
</div>
</Link>
)
}