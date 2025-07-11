import Cabecalho from "@/components/shared/Cabecalho";
import CarrosselImagens from "@/components/shared/CarroselImagens";
import Container from "@/components/shared/Container";
import Readme from "@/components/projetos/Readme";
import Tecnologias from "@/components/tecnologias/Tecnologias";
import { obterReadme } from "@/functions/github";
import { obterProjeto } from "@/functions/projetos";

export default async function PaginaProjeto(props:{params: Promise<{ id:string}> }){

const {id} = await props.params
const projeto = await obterProjeto(id)
if(!projeto)return null
const readme = await obterReadme(projeto.repositorio)



return(
<div className="bg-black">
<Cabecalho />
  <Container className="py-10 px-16 flex-col item-center gap-10">
  <h1 className="text-3xl self-start font-bold">{projeto.nome}</h1>

  <CarrosselImagens imagens={projeto.imagens.slice(1)}/>
  <Tecnologias lista={projeto.tecnologias} tamanhoMenor/>
  <Readme markdawn={readme}/>
  </Container>
</div>
)
}