import {Link} from 'react-router-dom'

function ConsultaCard({item}){

    return(
        <>
        <div key={item.id} className='consultaCard bg-zinc-100 px-6 py-5 border-zinc-300 border w-full gap-14 flex flex-col rounded-md'>
            <div>
                <h3 className='font-bold'>{item.nome}</h3>
                <span className=' text-sm'>saiba mais</span>
            </div>
            <div>
                <p>A partir de <span className='font-semibold'>R$ {item.preco}</span></p>
                <Link to='/agendar' state={item}>
                    <button className='bg-green-600 rounded-md py-2 px-4 text-white w-full mt-2'>AGENDAR</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default ConsultaCard;