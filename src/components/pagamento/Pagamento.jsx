function Pagamento(){
    return(
        <main className="">
            <section className="flex flex-row w-full h-screen items-center">
                <div className="bg-blue-800 w-1/2 px-36 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="font-bold text-3xl self-start mb-16">Finalizar Compra</h1>
                    <div className="pb-3 flex gap-3 border-b border-white justify-center">
                        <span className="cartao-cred flex flex-col items-center gap-2"><p>Cartão de Crédito</p></span>
                        <span className="boleto flex flex-col items-center gap-2"><p>Boleto</p></span>
                        <span className="pix flex flex-col items-center gap-2"><p>PIX</p></span>
                        <span className="pagar-local flex flex-col items-center gap-2"><p>Pagar no local</p></span>
                    </div>
                    <div>
                        <form className="px-5 mt-5 form-pag grid grid-cols-4 grid-rows-5 gap-3">
                            <input className="col-span-4" type="text" name="" id="" placeholder="Nome do Titular (Como escrito no cartão)"/>
                            {/* ///// */}
                            <input className="col-span-2" type="text" name="" id="" placeholder="Número do Cartão"/>
                            <input className="" type="text" name="" id="" placeholder="Mês Valid."/>
                            <input className="" type="text" name="" id="" placeholder="Ano Valid."/>
                            {/* ///// */}
                            <input className="col-span-2" type="text" name="" id="" placeholder="Cód de Segurança"/>
                            <input className="col-span-2" type="text" name="" id="" placeholder="CPF do Titular"/>
                            {/* ///// */}
                            <input className="col-span-4" type="text" name="" id="" placeholder="1x de R$ 180,00"/>
                            {/* ///// */}
                            <button type="button" className="col-span-4 bg-orange-400 text-white font-semibold py-3 rounded-lg w-full">Finalizar Compra</button>

                        </form>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 px-24 justify-center h-full">
                    
                    <div className="w-full"> 
                        <div className="w-full flex flex-col gap-12">
                            <h2 className="font-semibold text-xl">Resumo dos serviços</h2>
                            <div className="grid grid-cols-3 gap-5 text-sm items-center">
                                <span>Serviço</span>
                                <span>Agendamento para:</span>
                                <span>Valor</span>
                                <h2 className="font-semibold text-lg">Cardiologia</h2>
                                <span>17/10/2023</span>
                                <span>R$180,00</span>                                
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mt-20">
                            <div className="col-span-3 w-full">
                                <input className="rounded-s-lg py-2 px-3 border-y border-l border-zinc-500 w-5/6" type="text" name="" id="" placeholder="Cupom de Desconto"/>
                                <button className="text-green-600 font-semibold rounded-e-lg py-2 px-3 border-y border-r border-zinc-500 w-1/6" type="button">Aplicar</button>
                            </div>
                            <div className="col-span-3 flex justify-between">
                                <span>Sub-total</span>
                                <span>R$ 180,00</span>
                            </div>
                            <div className="col-span-3 flex justify-between">
                                <span>Desconto</span>
                                <span>R$ -50,00</span>
                            </div>
                            <div className="col-span-3 flex justify-between mt-6">
                                <span>Total</span>
                                <span>R$ 30,00</span>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </section>
        </main>
    )
}

export default Pagamento;