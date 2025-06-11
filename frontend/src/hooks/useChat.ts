import Mensagem from "@/model/Mensagem";
import useLocalStorage from "./useLocalStorage";
import { Id } from "@core";

export default function useChat(){
const [chatId]= useLocalStorage<string>("chatId", Id.gerar());
const [mensagens, setMensagens]=useLocalStorage<Mensagem[]>("mensagens", [])

function adicionarMensagem(texto: string) {
  const novaMensagem:Mensagem={
    id:Id.gerar(),
    texto,
    autor:"visitante",
    lado:"direito"
  }
  setMensagens([...mensagens,novaMensagem])
}
return {
  chatId, 
  mensagens,
  adicionarMensagem}

}