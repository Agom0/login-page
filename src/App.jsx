import { useState } from "react"
import imgAnimada from "../public/animada.svg"
import { ToastContainer, toast } from 'react-toastify';

export default function app(){
//hooks
const [user, setUser] = useState("")
const [pass, setPass] = useState("")

//função para usar no click do botão
function clickLogin(){
    if (!user || !pass) {
      return toast.error("esqueceu de preencher os campos, seu trouxa")
    }

    if(user.length <8 || pass.length<8){
      return toast.error("usuer ou senha invalidos")

    }

    //requisição para o backend
    console.log(user)
    console.log(pass)
   return toast.success("Sua memoria me surpreende, você foi logado")
}


//se não houver user ou senha exibir msg
  return (
    <div className="w-full h-screen flex bg-[#201b2c]">
      <ToastContainer
      position="top-right"
      autoClose={5000}
      theme="colored"
      />
       <div className="w-[50%] h-full flex items-center justify-center flex-col" > 
        <h1 className="text-[30px] font-bold text-[#00ff88]">Entre para o nosso time</h1>
        <img src={imgAnimada} alt="imagem animada" width={500}/>
       </div>
       <div className="w-[50%] h-full flex items-center">
          <div className="w-[50%] h-[350px] bg-[#2f2942] rounded-xl">
            <div className="w-full h-[15%] flex items-center justify-center">
              <h1 className="text-[30px] text-[#00ff88] font-bold">LOGIN</h1>
            </div>
            <div className="w-full h-[60%] p-[20px]">
              <label htmlFor="user" className="text-white">Usuário</label>
              <input 
              onChange={
                (event)=> {setUser(event.target.value)}
              }
              type="text" 
              id="user" 
              className="w-full rounded-md p-[10px] bg-[#514768] text-white mb-4"
              />

              <label htmlFor="pass" className="text-white">Senha</label>
              <input 
              onChange={
                (event) => {setPass(event.target.value)}
              }
              type="password" 
              id="pass" 
              className="w-full rounded-md bg-[#514768] p-[10px] text-white" />
              <div className="w-full flex items-center justify-center text-white pt-1">
                <a href="">Esqueceu sua senha?</a>
              </div>
            </div>
            <div className="w-full h-[25%] p-[20px] flex items-center">
              <button 
              onClick={clickLogin}
              className="w-full h-[50px] text-[18px] font-bold text-[#201b2c] rounded-lg bg-[#00ff88] shadow-lg shadow-[#33f79c63]">Login</button>
            </div>
          </div>
       </div>
    </div>
  )
}