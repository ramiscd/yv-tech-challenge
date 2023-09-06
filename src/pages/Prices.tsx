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
                <img src={dynamicParam2} alt="" className='img-test' />
                <h1>PLANOS DE JOGOS</h1>
                <p className='big-text'>Você pode fazer o plano de assinatura de todos os jogos ou apênas do jogo que quer jogar no momento via Streaming, caso ainda esteja em dúvida de o jogo é bom, teste gratuitamente!</p>
            </div>
            <div className='container itens-price'>
                <div className='row'>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Grátis</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">R$0<small className="text-muted fw-light">/mês</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>teste grátis</li>
                                    <li>jogue por 30 minutos</li>
                                    <li>Jogue online</li>
                                    <li>Acesso por streaming</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">TESTAR</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Jogo único</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">R$10<small className="text-muted fw-light">/mês</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Jogue o jogo ilimitado</li>
                                    <li>jogue online</li>
                                    <li>Pague pelo que usar</li>
                                    <li>Acesso por streaming</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">COMPRAR</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Todo catálogo</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">R$50<small className="text-muted fw-light">/mês</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Todo catálogo Ilimitado</li>
                                    <li>jogue online</li>
                                    <li>Pague pelo que usar</li>
                                    <li>Acesso por streaming</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">COMPRAR</button>
                            </div>
                        </div>
                    </div>

                </div>

                
            </div>
            <Footer />
        </div>
    )
}