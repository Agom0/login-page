import imgAnimada from "../public/animada.svg"

export default function app(){
  return (
    <div className="w-full h-screen flex bg-[#201b2c]">
       <div className="w-[50%] h-full flex items-center justify-center flex-col" > 
        <h1 className="text-[30px] font-bold text-[#00ff88]">Entre para o nosso time</h1>
        <img src={imgAnimada} alt="imagem animada" width={500}/>
       </div>
       <div className="w-[50%] h-full flex items-center">
          <div className="w-[50%] h-[350px] bg-[#2f2942] rounded-xl">
            <div className="w-full h-[15%] flex items-center justify-center">
              <h1 className="text-[30px] text-[#00ff88] font-bold">LOGIN</h1>
            </div>
            <div className="w-full h-[70%] p-[20px]">
              <label htmlFor="user" className="text-white">Usuário</label>
              <input type="text" id="user" className="w-full rounded-md pd-[10px] bg-[#514768] text-white mb-4" />

              <label htmlFor="pass" className="text-white">Senha</label>
              <input type="password" id="pass" className="w-full rounded-md bg-[#514768] p-[10px] text-white" />
            </div>
            <div className="w-full h-[15%]"></div>
          </div>
       </div>
    </div>
  )
}