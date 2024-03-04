import Menu from "./Menu";
function Home(){
    return(
        <div id="lilas">
            <h1 id="home">Home</h1>
            <Menu />
            <p id="bemvindo">Bem vindo</p>
            <p id="texto"> Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit. Facilis consectetur libero eos iure sit, modi tempore. <br /> Molestiae fuga qui ad iusto quaerat, ullam <br /> quos doloribus sit, ea eaque odio suscipit.</p>
            <div className="imagens">
                <img src="imagens/ameixinha.png" alt="foto ameixinha" id="ameixinha" />
                <img src="imagens/amora.png" alt="foto amora" id="amora" />
            </div>
        </div>
    )

}
export default Home