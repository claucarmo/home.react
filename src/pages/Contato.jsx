import Menu from "./Menu";
function Contato(){
    return(
        <div>
            <h1>Contato</h1>
            <Menu />
            <div class="contatos">
               <p id="contate-nos">Contate-nos</p>
                
                <div class="redes">
                    <img src="" alt="icone instagram" id="instagram" /> <br/>
                    <img src="" alt="icone facebook" id="facebook"/>  <br/>
                    <img src="" alt="icone email" id="email" />
                </div>

               <p>Telefone para contato: (00)0000-0000</p>
               <p>SAC (Atendimento ao cliente)</p>
            </div>
        </div>
    )

}
export default Contato