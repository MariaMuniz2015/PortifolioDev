import Link from "next/link";
import Container from "./Container";
 import Image from "next/image";
import Menu from "./Menu";


 
export default function Cabecalho(){
  return(
  <header className="flex items-center h-16 w-4xl bg-black">
    <Container className="flex-1 flex justify-center sm:justify-between items-center bg-black-50">
      <div className="flex flex-row items-center gap-10">
        <Link href="/" className="hidden sm:block">
        <Image  src="/logo.svg" alt="logo" width={80} height={0}/>
        </Link>
        <Menu/>
      </div>
      <div className="hidden sm:flex items-center">
      <Link href="https://www.linkedin.com/in/maria-muniz-/"
      target="_blank" 
      className="bg-red-500 rounded-full px-7 text-sm font-bold"> Perfil
      </Link>
      </div>
    </Container>
  </header>
  )
}