import getInfoCard from '../../assets/api'
import ConsultaCard from '../homeComp/ConsultaCard';
import propaganda from '../../img/propaganda.png'

const consultaPath = 'consultaCard'
const itensConsultas = await getInfoCard(consultaPath);
console.log(itensConsultas)

function Consultas(){

    window.onload = window.scrollTo(0, 0)


    function renderConsultaCard(){
        return Object.keys(itensConsultas).map((obj) => {
            let valor =  itensConsultas[obj]
            return (
                    <ConsultaCard key={valor.id} item={valor} />
            )
        })
    }

    return(
        <main className="pt-20 px-36 flex flex-col gap-12">
            <div className="flex flex-row justify-between w-full">
                <div>
                    <span className='text-xs'>Pagina Inicial / Consultas</span>
                    <h1 className='-mt-1 text-3xl font-bold text-green-600'>Consultas</h1>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">São Paulo - SP</option>
                    </select>
                </div>
            </div>

            <section className=''>
                <div className="grid grid-cols-6 justify-between w-full">
                    <div className="flex flex-col gap-5">
                        <div>
                            <span className='text-sm'>Filtrar por</span>
                            <h3 className='text-lg font-semibold'>Bairro</h3>
                        </div>

                        <div>
                            <h3 className='text-lg font-semibold'>Avaliação</h3>
                            <div className='flex gap-2'>
                                <span className='fullStar'></span>
                                <span className='fullStar'></span>
                                <span className='fullStar'></span>
                                <span className='fullStar'></span>
                                <span className='fullStar'></span>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <h3 className='text-lg font-semibold'>Preço</h3>
                            <div className='flex gap-2 text-sm text-zinc-700'>
                                <input type="radio" name="ss" id="" />
                                <label htmlFor="">De R$ 15,00 a R4 60,00</label>
                            </div>
                            <div className='flex gap-2 text-sm text-zinc-700'>
                                <input type="radio" name="ss" id="" />
                                <label htmlFor="">De R$ 61,00 a R$ 99,00</label>
                            </div>
                            <div className='flex gap-2 text-sm text-zinc-700'>
                                <input type="radio" name="ss" id="" />
                                <label htmlFor="">De R$ 100,00 a R$ 149,00</label>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <h3 className='text-lg font-semibold'>Outros Filtros</h3>
                            <div className='flex gap-2 text-sm text-zinc-700'>
                                <input type="radio" name="x" id="" />
                                <label htmlFor="">Aceita Agendamento</label>
                            </div>
                            <div className='flex gap-2 text-sm text-zinc-700'>
                                <input type="radio" name="x" id="" />
                                <label htmlFor="">Delivery</label>
                            </div>
                            <div className='flex gap-2 text-sm text-zinc-700'>
                                <input type="radio" name="x" id="" />
                                <label htmlFor="">Pag. no Local</label>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <h3 className='text-lg font-semibold'>Ordem Alfabética</h3>
                            <div className='flex gap-2 text-sm text-zinc-700'>
                                <input type="radio" name="y" id="" />
                                <label htmlFor="">A - C</label>
                            </div>
                            <div className='flex gap-2 text-sm text-zinc-700'>
                                <input type="radio" name="y" id="" />
                                <label htmlFor="">D - F</label>
                            </div>
                            <div className='flex gap-2 text-sm text-zinc-700'>
                                <input type="radio" name="y" id="" />
                                <label htmlFor="">G - J</label>
                            </div>
                        </div>

                    </div>
                    <div className=" col-span-4 px-5 flex flex-col gap-3">
                    
                        <div className="grid grid-cols-4 gap-3">
                            <input className="border-2 border-zinc-200 rounded-lg col-span-3 py-2 px-4" type="text" name="" id="" placeholder="Digite o nome da consulta que deseja realizar"/>
                            <select name="" id="" className='border-2 border-zinc-200 rounded-lg py-2 px-4'>
                                <option value="">Ordernar por   </option>
                            </select>
                        </div>

                        <div className="grid grid-cols-4 gap-3">
                            {renderConsultaCard()}
                        </div>

                    </div>
                    <div className="flex flex-col justify-center">
                        <img className='' src={propaganda} alt="" />
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Consultas;