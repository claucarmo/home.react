import Menu from "./Menu";
function Perfil(){
    return(
        <div id="azul">
            <h1 id="perfil">Perfil</h1>
            <Menu />
            <div class="quadro-infos">
                <div className="infos">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <p id="idade">Idade</p>
                <p id="endereco">Endereço</p>
                </div>
            </div>
        </div>
    )

}
export default Perfil