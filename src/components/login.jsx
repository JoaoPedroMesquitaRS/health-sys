function Login({validar}){
    return(
        <main className="">
            <section className="flex flex-row w-full h-screen items-center">
                <div className="bg-blue-800 w-1/2 px-36 flex flex-col items-center justify-center h-full gap-3">
                    <h2 className="text-white">Ainda não tem cadastro?</h2>
                    <button className="text-green-500 bg-white w-full py-2 rounded-xl font-semibold" type="button">Fazer Cadastro</button>
                </div>
                <div className="flex flex-col w-1/2 px-36 justify-center h-full">
                    
                    <form className="flex flex-col gap-3">
                        <h1 className="text-xl font-bold text-zinc-700">Faça seu login</h1>
                        <input className="px-3 py-2 rounded-lg border border-zinc-400" type="text" name="" id="" placeholder="Usuário" />
                        <input className="px-3 py-2 rounded-lg border border-zinc-400" type="text" name="" id="" placeholder="Senha" />
                        <span className="font-light text-sm mb-5">Esqueci minha senha</span>
                        <button type="button" className='bg-green-500 shadow-lg shadow-green-400 w-full py-2 text-white font-bold rounded-2xl'>ENTRAR</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Login;