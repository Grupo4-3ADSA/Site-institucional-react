import React, { useState } from "react";
import '../html-css-template/css/style.css';
import fundo from '../html-css-template/images/fundo.png';
import logo from '../html-css-template/images/autg.png';
import beatriz from '../html-css-template/images/beatriz.png';
import elizeu from '../html-css-template/images/elizeu.png';
import guilherme from '../html-css-template/images/guilherme.png';
import jonas from '../html-css-template/images/jonas.png';
import mateus from '../html-css-template/images/mateus.png';
import vitoria from '../html-css-template/images/vitoria.png';
import fundo_sobre from '../html-css-template/images/fundo_sobre.png';
import fundo_servicos from '../html-css-template/images/fundo_servicos.png'
import fundo_simulacao from '../html-css-template/images/fundo_simulacao.png'
import fundo_contato from '../html-css-template/images/fundo_contato.png'
import automacao from '../html-css-template/images/automacao.png'
import monitoramento from '../html-css-template/images/assinatura-eletronica.png'
import predio from '../html-css-template/images/predio.png'
import Andar from "../componentes/andar";
import adicionar from '../html-css-template/images/adicionar.png'
import excluir from '../html-css-template/images/excluir.png'
import SlideRoutes from 'react-slide-routes';
import { Route, NavLink } from 'react-router-dom';


let quantidadeAndares = 1

function Index() {

    const Home = () =>
        <div className="card home">

            <img src={automacao} alt="" />

            <div className="servico">Automação Eletrica</div>

            <p>Conquiste o controle total da sua empresa na palma da sua mão</p>

        </div>;

    const Monitoramento = () => <div className="card about">
        <img src={monitoramento} alt="" />

        <div className="servico">Monitoramento</div>

        <p>Monitore todos os seus equipamentos de seu predio</p>

    </div>;

    const Contact = () => <div className="card contact">
        <img src={automacao} alt="" />

        <div className="servico">Eletrica 3</div>

        <p>Conquiste o controle total da sua empresa na palma da sua mão</p>

    </div>;



    const [andar, setAndar] = useState(["Andar 1"])
    const [query, setQuery] = useState("")

    function adicionaAndar() {
        quantidadeAndares += 1
        setQuery(`Andar ${quantidadeAndares}`)
        setAndar(andar => [`Andar ${quantidadeAndares}`, ...andar])
        console.log(andar)
    }

    function removerAndar() {
        if (andar.length > 1) {
            setAndar(andar.filter(a => a !== andar[0]))
            quantidadeAndares--
        }
    }


    return (

        <>

            <div className="container-index">

                <nav className="navbar">
                    <ul className="menu_principal">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#simulacao">Simulação</a></li>
                        <li className="btn_contato"><a className="btn_contato" href="#contato">Contato</a></li>
                    </ul>
                </nav>

                <section style={{
                    backgroundImage: `url(${fundo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'

                }} id="home">

                    <div className="texto_inicial">
                        <img src={logo} alt="" />
                        <p>
                            <p className="institucional">Institucional</p>
                            Empresa focada em soluções tecnologica para o seu negócio  garantindo a economia de energia da sua empresa!
                        </p>
                        <button className="btn_incial">Entre em Contato</button>

                    </div>


                </section>

                <section style={{
                    backgroundImage: `url(${fundo_sobre})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 95%'

                }} id="sobre">

                    <h1>Quem somos</h1>
                    <div className="linha_centro"></div>

                    <p><b>AUTG</b> é uma empresa que presta serviço para prédios comerciais, trazemos <b>automação</b> e <b>tecnologia</b> para ajudar na <b>gestão</b> do seu negócio</p>

                    <div className="container_Integrantes">

                        <img src={beatriz} alt="" />
                        <img src={elizeu} alt="" />
                        <img src={guilherme} alt="" />
                        <img src={jonas} alt="" />
                        <img src={mateus} alt="" />
                        <img src={vitoria} alt="" />

                    </div>

                </section>

                <section style={{
                    backgroundImage: `url(${fundo_servicos})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 95%'

                }} id="servicos">

                    <h1 className="titulo_servicos">Nosso Serviços</h1>
                    <div className="linha_centro"></div>

                    <div className="nossos_servicos">

                        <nav className="slidenav">
                            <NavLink to="/" end>Automação</NavLink>
                            <NavLink to="/Monitoramento">Monitoramento</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>

                        <SlideRoutes>
                            <Route path="/" element={<Home />} />
                            <Route path="/Monitoramento" element={<Monitoramento />} />
                            <Route path="/contact" element={<Contact />} />
                        </SlideRoutes>

                    </div>

                </section>

                <section style={{
                    backgroundImage: `url(${fundo_simulacao})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 95%'

                }} id="simulacao">

                    <div className="box_simulacao">

                        <h1>Vamos fazer uma simulação de preço?</h1>
                        <div className="linha"></div>

                        <p>Cliqui no mais para adicionar um andar e simular sua economia.</p>

                        <h2>Economia de: R${quantidadeAndares * 2000}</h2>

                    </div>

                    <div className="box_predio" style={{
                        backgroundImage: `url(${predio})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'

                    }}>

                        <div className="andares">

                            <div className="adicionar">
                                <img onClick={adicionaAndar} src={adicionar} alt="" />
                                <img onClick={removerAndar} src={excluir} alt="" />
                            </div>

                            {

                                andar.map(andar => (
                                    <Andar
                                        name={andar}
                                    />
                                ))

                            }


                        </div>

                    </div>

                </section>

                <section style={{
                    backgroundImage: `url(${fundo_contato})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 95%',
                    backgroundColor: 'linear-gradient(94deg, rgba(13, 40, 59, 0.363) 0%, rgb(203, 216, 224) 100%)'

                }} id="contato">

                    <div className="container_contato">

                        <div className="texto_contato">

                            <h1>Entre em contato conosco</h1>
                            <div className="linha"></div>

                            <p>
                                •Retornaremos em breve! <br />
                                •Um consultor entrará em contato, fique atento a sua caixa de e-mail
                            </p>

                            {/* <div className="solicitacao">
                                <h3>•Já fez sua solicitação? <span>Acompanhe seu pedido com o cnpj:</span></h3>
                                <input class="input-field:first-child" type="text" />
                            </div> */}


                        </div>

                        <div className="formulario_contato">



                            <form action="">

                                <div className="teste">
                                    <h2>Formulario para contato:</h2>
                                    <div className="linha"></div>
                                </div>

                                <div className="input_box">

                                    <label className="label_input">Nome da Empresa:</label>
                                    <input placeholder="Digite o nome da empresa" type="text" required />

                                </div>

                                <div className="input_box">

                                    <label className="label_input">Email:</label>
                                    <input placeholder="Exemplo@gmail.com.br" type="email" required />

                                </div>

                                <div className="input_box">

                                    <label className="label_input">Telefone:</label>
                                    <input placeholder="(11)99999-9999" type="text" required />

                                </div>

                                <div className="input_box">

                                    <label className="label_input">Cnpj:</label>
                                    <input placeholder="12.345.678/0001-00" type="text" required />

                                </div>

                                <div className="input_box">

                                    <label>Quer deixar alguma mensagem?</label>
                                    <textarea name="mensagem" id="mensagem" className="input_mensagem"
                                        placeholder="Mensagem" required></textarea>

                                </div>

                                <input type="submit" className="button_form" />

                            </form>



                        </div>

                    </div>

                </section>


            </div>

        </>

    );
}

export default Index;