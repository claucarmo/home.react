import Menu from "./Menu";
function Game(){
    return(
        <div>
            <h1>Game</h1>
            <Menu />
            <p id="game">Jogos que talvez sejam do seu interesse</p>
            <div class="jogos">
                <div class="jogos-cima">
                    <img src="imagens/moranguinho_confeitaria.png" alt="Confeitaria da moranguinho" id="confeitaria" /> <br/>
                    <img src="imagens/moranguinho_festadopijama.png" alt="Festa do pijama da moranguinho" id="festa-do-pijama" /> <br/>
                </div>
                
                
                <div class="cima">
                    <p id="descricao-confeitaria">Jogo da confeitaria da moranguinho e suas amigas</p> 
                    <p id="descricao-festa">Jogo da festa do pijama da moranguinho e suas amigas</p>
                </div>

                <div class="jogos-embaixo">
                <img src="imagens/moranguinho_napraia.png" alt="Moranginho na praia" id="praia" /> 
                <img src="imagens/moranguinho_petshop.png" alt="Petsop da moranguinho" id="petshop" />
                </div>

                <div class="embaixo">
                    <p id="descricao-praia">Jogo da moranguinho na praia com suas amigas</p> 
                    <p id="descricao-petshop">Jogo do petshop da moranguinho e suas amigas</p>
                </div>
               
            </div>
        </div>
    )

}
export default Game