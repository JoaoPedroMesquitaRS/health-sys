import imagemDemo from '../../img/mapa-demo.jpg'

function InfoConsultorio(){

    function selectedConsInfo(){
        const abasInfo = document.querySelectorAll('.consInfo');
        

        abasInfo.forEach((item) =>{
            item.addEventListener('click', (e) =>{
                const outrosElem = document.querySelectorAll('.consInfo');
                const infoCard = document.querySelectorAll('.infoCard');

                const id = e.target.id
                outrosElem.forEach((elm) =>{
                    elm.classList.remove('consInfoSelected')
                
                    infoCard.forEach((elm) =>{
                        if(elm.classList.contains(id) !== true){
                            elm.classList.add('consInfoCardNS')
                        }else{
                            elm.classList.remove('consInfoCardNS')
                        }
                    })
                
                }) 
                item.classList.add('consInfoSelected')
                item.classList.remove('consInfoCardNS')
                //console.log(infoCard)
                
            })
        })
    }

    window.onload = setTimeout(selectedConsInfo, 800);

    return (

        <div className="mt-16 grid grid-cols-7">
            <div className="flex flex-col gap-8 col-span-3">
                <div className="flex gap-8 font-semibold text-zinc-700">
                    <h2 className="consInfoSelected consInfo" id="dados">Dados da Clínica</h2>
                    <h2 className="consInfo" id="avaliacao">Avaliações</h2>
                    <h2 className="consInfo" id="profissionais">Profissionais</h2>
                </div>
                <div className="infoCard dados flex flex-col text-zinc-700 text-sm">
                    <h2>Especialidades</h2><br />
                    <span>CARDIOLOGIA</span> 
                    <span>ENDOCRINOLOGIA</span> 
                    <span>GASTROENTEROLOGIA</span> 
                    <span>GINECOLOGIA</span> 
                    <span>NEUROLOGIA</span> 
                    <span>CLINICO</span> 
                    <span>GERAL/CLINICA</span> 
                    <span>MEDICA</span>
                    <span>NUTRIÇAO</span>
                    <span>ORTOPEDIA</span>
                    <span>PNEUMOLOGIA</span>
                    <span>PSICOLOGIA</span>
                    <span>UROLOGIA</span>
                </div>
                <div className="consInfoCardNS infoCard avaliacao flex flex-col text-zinc-700 text-sm">
                    <h2>avaliacao</h2><br />
                </div>
                <div className="consInfoCardNS infoCard profissionais flex flex-col text-zinc-700 text-sm gap-8">
                    <div>
                        <h2 className='font-bold'>Maria Fulana de Tal</h2>
                        <span className='text-sm text-zinc-700'>Doutora em ...</span>
                    </div>
                    <div>
                        <h2 className='font-bold'>José Siclano Silva</h2>
                        <span className='text-sm text-zinc-700'>Doutor em ...</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-3">
                <span className="facebook-icon" ></span>
                <span className="insta-icon" ></span>
                <span className="linkedin-icon" ></span>
            </div>
            <div className="col-span-3">
                <img className="imagem-demo" src={imagemDemo} alt="" />
            </div>
        </div>
    )
}

export default InfoConsultorio;