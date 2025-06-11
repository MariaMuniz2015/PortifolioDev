import Image from "next/image"

export default function MiniCv(){
  return(
    <div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6">
      <div className="relative min-w-64 min-h-64 xl:self-end">
      <Image src="/FOTO.jpeg" alt="foto perfil" fill/>
      </div>
      <div className="flex flex-col gap-5 self-center py-6 items-center  md:items-start lg:items-center xl:items-start">
      <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
      <span 
						className="
                            bg-gradient-to-r from-red-500 via-white to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        ">Maria Muniz</span>
      <span>Desenvolvedora</span>
      </div>
      <p className="text-sm text-center md:text-left lg:text-center xl:text-left">Desenvolvedora Front-end, autodidata, apaixonada por programação e
            café, com habilidades em React.js, Next.js, JavaScript, TypeScript,
            Styled Components, Material UI e consumo de APIs REST, git e github.
            Empolgada pelo desenvolvimento de componentes de interface
            reutilizáveis de forma simples, intuitiva e com uma ótima
            performance. Formada em Banco de dados pela Faculdade Pitágoras</p>
    </div>
    </div>
  )
} 