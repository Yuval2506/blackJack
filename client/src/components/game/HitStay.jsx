import Player from "./Player"
import Computer from "./Computer" 

function HitStay (){
    return (
        <div>
            <div>
                <Player/>
                <Computer/>
            </div>
            <div>
                <button>Hit</button>
                <button>Stand</button>
            </div>
        </div>
    );
};

export default HitStay;