import Menu from "./Menu";
function Home(){
    return(
        <div id="lilas">
            <h1 id="home">Home</h1>
            <Menu />
            <div class="textos">
            <p id="bemvindo">Bem vindo</p>
            <p id="moranguinho-lover">𝙈𝙤𝙧𝙖𝙣𝙜𝙪𝙞𝙣𝙝𝙤 <br/> 𝙡𝙤𝙫𝙚𝙧</p>
            <p id="texto"> Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit. Facilis consectetur libero eos iure sit, modi tempore. <br /> Molestiae fuga qui ad iusto quaerat, ullam <br /> quos doloribus sit, ea eaque odio suscipit.</p>
            <button id="cadastrar">cadastrar-se</button>
            <button id="entrar">Entrar</button>
            </div>
            
            <div className="imagens">
                <img src="imagens/ameixinha.png" alt="foto ameixinha" id="ameixinha" />
            </div>
           
        </div>
    )

}
export default Home