
//import Image from "next/image"

import Curriculo from "@/components/curriculo";
import Principal from "@/components/landing/principal";
import Projetos from "@/components/projetos/Projetos";
import Container from "@/components/shared/Container";
import { obterProjetos } from "@/functions/projetos";
import { obterTecnologias } from "@/functions/tecnologias";

export default async function Home(){

const tecnologia= await obterTecnologias()
const projetos = await obterProjetos()
  return ( 
   
  <div>

    <Principal tecnologias={tecnologia.destaques}/>
    <Container className="py-10 px-16 flex-col item-center gap-10">
      <Projetos titulo="Destaque" lista={projetos.destaques}/>
      <Projetos titulo="Web" lista={projetos.web}/>
      <Projetos titulo="Mobile" lista={projetos.mobile}/>
      <Projetos titulo="Jogos" lista={projetos.jogos}/>


    <Curriculo tecnologias={tecnologia.todas}/>
    </Container>
  </div>
  )
}