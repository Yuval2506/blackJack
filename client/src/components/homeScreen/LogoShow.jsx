import logo from '../../assets/blackjack.svg'
import "./LogoShow.css"

function LogoShow (){
    return (
        <div id="div-logo-show">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Black Jack</h1>
        </div>
    );
};

export default LogoShow;