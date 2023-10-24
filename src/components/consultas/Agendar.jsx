import { useLocation, Link } from "react-router-dom";
import logoConsultorio from '../../img/logo-consultorio.png'
import InfoConsultorio from './infoConsultorio.jsx'

function Agendar({data}){

    const info = useLocation()
    const item = info.state

    function selectedBtn(){
 
        const tipoAgendCard = document.querySelector('#btnAgend');
        const btn = tipoAgendCard.children;

        for (const item in btn) {
            if (Object.hasOwnProperty.call(btn, item)) {
                const element = btn[item];
                element.addEventListener('click', (e) =>{
                    
                    const isOpen = element.classList.contains('clicked');
                    if (isOpen === false){

                        const outrosElem = document.querySelectorAll('.clicked');
                        outrosElem.forEach((elm) =>{
                            elm.classList.remove('clicked')
                        }) 
                        element.classList.add('clicked');
                    }
                })
            }
        }    
    }

    

    window.onload = setTimeout(selectedBtn, 800);
    window.onload = window.scrollTo(0, 0)

    return(
        <main className="pt-12 px-36 flex flex-col gap-12">
        
            <section className="pt-10">
                <div className="grid grid-cols-6 w-full items-center">
                    <img src={logoConsultorio} alt="logo-consultorio" />
                    <div className="col-span-4">
                        <h1 className="font-bold text-3xl">AVA CONSULTORIO DE ESPECIALIDADE MEDICA</h1>
                        <span className="pin-location text-sm text-green-700">RUA JOSE CARLOS DE OLIVEIRA, 337, RECREIO DOS BANDEIRANTES, RIO DE JANEIRO - RJ</span>
                    </div>
                    <div>
                        <select name="" id="">
                            <option value="">Selecione a ciadade</option>
                        </select>
                    </div>
                </div>
            </section>

            <section>
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col text-zinc-700 gap-8">
                        <div>
                            <h1 className="font-bold text-xl text-black">{item.nome}</h1>
                            <span className="text-sm ">CONSULTA OU SESSAO EM CONSULTORIO (NO HORARIO NORMAL OU PREESTABELECIDO)</span>
                        </div>
                        <div>
                            <h3 className="font-semibold">Preparação</h3>
                            <p className="text-sm">Trazer exames anteriores, receitas médicas e medicamentos (nome e dosagem) em uso. <br /><br />

                                Durante a consulta, o médico poderá indicar a coleta do exame de papanicolau. Neste caso, será cobrado um valor adicional por este exame, sendo necessário estar em preparo adequado para a realização.
                                <br /><br />
                                Preparo para exame de papanicolau: <br /><br />
                                Nas 48 horas anteriores ao exame, é necessário: <br /><br />
                                - Não usar creme e/ou óvulo vaginal;<br />
                                - Não utilizar ducha nem fazer lavagem interna;<br />
                                - Não realizar exame ginecológico com toque, ultra-sonografia transvaginal antes do exame (Depois do exame não tem contra-indicações).<br />
                                - Não manter relações sexuais, com ou sem uso de preservativos.<br />
                                - Idealmente, a coleta de papanicolau não deve ser realizada durante a menstruação. Em casos de menstruação contínua, consultar o médico ginecologista.<br /></p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <span className="text-zinc-700 text-sm">Selecione um tipo de atendimento</span>
                        <div id="btnAgend" className="grid grid-cols-3 gap-2">
                            <button id="um" type="button" className="tipoAgendCard clicked rounded-lg px-5 py-5 flex flex-col gap-7">
                                <div>
                                    <h3 className="font-bold">Com Clube Eliel</h3>
                                    <span className="text-zinc-700 text-sm">Para membros do clube Eliel Figueiredo.</span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-sm text-orange-500">De: R$ 280,00</span>
                                    <span className="font-bold text-2xl">R$ 120,00</span>
                                    <span className="text-zinc-700 text-sm">em até 4x de 30,00</span>
                                </div>
                            </button>
                            <button id="dois" type="button" className="tipoAgendCard rounded-lg px-5 py-5 flex flex-col gap-7">
                                <div>
                                    <h3 className="font-bold">Com Clube Eliel</h3>
                                    <span className="text-zinc-700 text-sm">Para membros do clube Eliel Figueiredo.</span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-sm text-orange-500">De: R$ 280,00</span>
                                    <span className="font-bold text-2xl">R$ 120,00</span>
                                    <span className="text-zinc-700 text-sm">em até 4x de 30,00</span>
                                </div>
                            </button>
                            <button id="tres" type="button" className="tipoAgendCard rounded-lg px-5 py-5 flex flex-col gap-7">
                                <div>
                                    <h3 className="font-bold">Com Clube Eliel</h3>
                                    <span className="text-zinc-700 text-sm">Para membros do clube Eliel Figueiredo.</span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-sm text-orange-500">De: R$ 280,00</span>
                                    <span className="font-bold text-2xl">R$ 120,00</span>
                                    <span className="text-zinc-700 text-sm">em até 4x de 30,00</span>
                                </div>
                            </button>
                        </div>

                        <div className="flex justify-between items-center font-semibold">
                            <span className="calender">Agendar para:</span>
                            <div className="flex gap-7">
                                <select name="" id="">
                                    <option value="">16/10/2023</option>
                                </select>
                                <select name="" id="">
                                    <option value="">08:45</option>
                                </select>
                            </div>
                        </div>
                        <Link to="/pagamento">
                            <button type="button" className="bg-green-500 text-white font-semibold py-3 rounded-lg w-full">IR PARA PAGAMENTO</button>
                        </Link>

                    </div>
                </div>

                <InfoConsultorio />

            </section>
            
        </main>
    )
}

export default Agendar;