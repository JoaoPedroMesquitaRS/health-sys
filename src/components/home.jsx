import getInfoCard from '../assets/api.js'
import imgFamilia from '../img/parents.png';
import cartaoHome from '../img/cartaoHome.png';
import ConsultaCard from './homeComp/ConsultaCard.jsx';
import Card from './homeComp/Card.jsx';

const infoCardPath = 'infoCard';
const consultaPath = 'consultaCard'
const cidadePath = 'cidades';

const itensCard = await getInfoCard(infoCardPath);
const itensConsultas = await getInfoCard(consultaPath);
const cidades = await getInfoCard(cidadePath)

function Home(){

    window.onload = window.scrollTo(0, 0)


    function getCidades(){
        return Object.keys(cidades).map((obj) => {
            let valor = cidades[obj]
            return (
                <option key={valor.id} value="select">{valor.nome}</option>
            )
        })
    }

    function renderConsultaCard(){
        return Object.keys(itensConsultas).map((obj) => {
            let valor =  itensConsultas[obj]
            return (
                    <ConsultaCard key={valor.id} item={valor} />
            )
        })
    }

    function renderItems(){
        return Object.keys(itensCard).map((obj) => {
            let valor =  itensCard[obj]
            return (
                    <Card key={valor.id} item={valor} />
            )
        })
    }
    

    return(
        <main className=''>
            <section className='home-sec pt-12 bg-gradient-to-b from-blue-800 to-blue-700 w-full px-36'>
                <div className='home-sec-um flex items-center'>
                    <div className='flex flex-col w-1/2 gap-7'>
                        <select name="" id="" className='w-48'>
                            <option value="select">Selecione a cidade...</option>
                            {getCidades()}
                        </select>
                        <h1 className='text-white text-3xl'>Peça já o seu Cartão de Descontos e agende consultas com até 70% de Desonto agora mesmo!</h1>
                        <button type='button' className='text-white w-48 border-white border rounded-lg py-1'>Saiba Mais</button>
                    </div>
                    <img className='h-96' src={imgFamilia} alt="imagem-familia"/>
                </div>
            </section>

            <section className='home-sec px-36 my-14'>
                <div id="cards" className='grid-cols-3 grid gap-8'>
                    {renderItems()}
                </div>
            </section>

            <section className='home-sec px-36 my-14 flex flex-col w-full items-center gap-12'>
                <div>
                    <h2 className='font-bold text-blue-900 text-lg mb-5'>CONSULTAS MAIS BUSCADAS</h2>
                    <div id='consultaCards' className='grid-cols-6 grid gap-4'>
                        {renderConsultaCard()}
                    </div>
                </div>
                <button className='border border-orange-600 rounded-md py-2 px-14 text-orange-600'>VER TODOS</button>
            </section>

            <section className='home-sec px-36 mt-14' >
                <div className='flex content-between w-full items-center px-12 py-20 rounded-md' id='cartao-info'>
                    <div className='text-zinc-600 w-1/3 flex flex-col gap-5'>
                        <h3 className='text-black font-bold text-3xl'>O que é o <span className='text-green-600'>Cartão de Descontos HealthSys?</span></h3>
                        <p>É o maior cartão de descontos do Brasil! Com ele você tem acesso a saúde, educação, lazer e muito mais 
                        por <span className='font-semibold'>apenas R$ 25 mensais!</span></p>
                        <div className='flex flex-col justify-center '>
                            <span className='check'>Consultas Médicas a partir de <span className='font-semibold'>R$ 24</span></span>
                            <span className='check'><span className='font-semibold'>Até 75% de Descocontos</span> em milhares de estabelecimentos</span>
                        </div>
                        <button type="button" className='bg-green-500 shadow-lg shadow-green-400 w-1/2 py-2 text-white font-bold rounded-2xl'>Peça já o seu</button>
                    </div>
                    <img className='ml-16' src={cartaoHome} alt="" />
                </div>
            </section>


            <section className='home-sec px-36' >
                <div id='cartao-form' className='flex flex-row w-full px-12 py-5 border-t-2 border-zinc-300'>
                    <div className='flex flex-col items-start w-1/2'> 
                        <h3 className='text-black font-bold text-3xl'>O que é o <span className='text-green-600'>Cartão de Descontos HealthSys?</span></h3>
                        <img className='h-72' src={imgFamilia} alt="imagem-familia"/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label className='font-semibold' htmlFor="">Nome Completo:</label>
                        <input className='rounded-lg mb-6 py-3' type="text" name="" />
                        <label className='font-semibold' htmlFor="">E-mail:</label>
                        <input className='rounded-lg mb-6 py-3' type="text" name="" />
                        <label className='font-semibold' htmlFor="">Celular:</label>
                        <input className='rounded-lg mb-6 py-3' type="text" name="" />
                        <button type="button" className='bg-green-500 shadow-lg shadow-green-400 mt-2 self-center w-1/2 py-2 text-white font-bold rounded-2xl'>Pedir Agora</button>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Home;