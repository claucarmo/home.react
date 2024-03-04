import Menu from "./Menu";
function Sobre(){
    return(
        <div id="azul">
            <h1>Sobre</h1>
            <Menu />
            <p id="sobre">Sobre nossa página</p>
            <p id="texto-sobre">Lorem ipsum dolor sit, <br/> amet consectetur adipisicing elit. Atque magnam quis nostrum ,<br/> ad laborum quos earum nisi eius ipsam adipisci, <br/>cumque suscipit? Explicabo quasi vero <br/>consequuntur nesciunt qui facilis earum.</p>
            <img src="imagens/laranjinha.png" alt="Foto da laranjinha" id="laranjinha" />
            
        </div>
    )

}
export default Sobre