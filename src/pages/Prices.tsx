import { useRouter } from 'next/router'
import Footer from './Footer'
import Nav from './Nav'
import games from '@/styles/games'

export default function Prices() {
    const router = useRouter();
    const dynamicParam = router.query.param;
    const dynamicParam2 = router.query.param2 as string;
    const dynamicParam3 = router.query.param3;
    const dynamicParam4 = router.query.param4;
    console.log(dynamicParam3);
    
    

    return (
        <div className="prices">
            <Nav />
            <div className='texto-price'>
                <h3>{dynamicParam}</h3>
                <img src={dynamicParam2} alt="" className='img-test'/>
                <h1>PLANOS DE JOGOS</h1>
                <p>Você pode fazer o plano de assinatura de todos os jogos ou apênas do jogo que quer jogar no momento via Streaming, caso ainda esteja em dúvida de o jogo é bom, teste gratuitamente!</p>
            </div>
            <div className='container itens-price'>
                <div className='row'>
                    <div className='col col-lg-4 col-6'>
                        <div className="card">

                            <div className="card-body card-price">
                                <h5 className="card-title">Demo (Jogue por 30 minutos)</h5>
                                <p className="card-text">R$0,00</p>
                                <a href="#" className="btn btn-primary">BAIXAR</a>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">✔️Jogue sem baixar</li>
                                <li className="list-group-item">❌Jogue por tempo ilimitado</li>
                                <li className='list-grup-item'>❌Tenha acesso a todo nosso catálogo</li>
                                <li className="list-group-item">❌Resosulção 4K</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col col-lg-4 col-6'>
                        <div className="card">

                            <div className="card-body card-price">
                                <h5 className="card-title">Jogar online todo o catálogo (Streaming)</h5>
                                <p className="card-text">R$49,90 por mês</p>
                                <a href="#" className="btn btn-primary">BAIXAR</a>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">✔️Jogue sem baixar</li>
                                <li className="list-group-item">✔️Jogue por tempo ilimitado</li>
                                <li className='list-grup-item'>✔️Tenha acesso a todo nosso catálogo</li>
                                <li className="list-group-item">✔️Resosulção 4K</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col col-lg-4 col-6'>
                        <div className="card">

                            <div className="card-body card-price">
                                <h5 className="card-title">Jogar online (Streaming)</h5>
                                <p className="card-text">R$9,90 por mês</p>
                                <a href="#" className="btn btn-primary">BAIXAR</a>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">✔️Jogue sem baixar</li>
                                <li className="list-group-item">✔️Jogue por tempo ilimitado</li>
                                <li className='list-grup-item'>❌Tenha acesso a todo nosso catálogo</li>
                                <li className="list-group-item">❌Resosulção 4K</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}