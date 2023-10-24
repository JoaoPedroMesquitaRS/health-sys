import {Link} from 'react-router-dom';

function Card({item}){
    return(
        <div className="card bg-zinc-100 px-6 py-5 border-zinc-300 border w-full gap-2 flex flex-col rounded-md">
            <span className={`${item.tipo} -mb-5`}></span>
            <h3 className='font-semibold text-lg border-2 border-b-amber-600 w-2/3 pb-2'>{item.nome}</h3>
            <p className='text-zinc-700'>{item.desc}</p>
            <Link to='/consultas'>
                <button className='bg-amber-600 rounded-md py-2 px-8 text-white w-full'>VER LISTA</button>
            </Link>
        </div>
    )
}

export default Card;