import Card from '../homeComp/Card.jsx';

function Info(){
    return (
        <section className='px-36 my-14'>
            <div id="cards" className='grid-cols-3 grid gap-8'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}

export default Info()