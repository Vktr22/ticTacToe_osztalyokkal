import Elem from "./Elem.js";

export default class JatekTer{

    constructor(){
        // példányosítjuk az Elem osztályt
        const szuloElem = $(".jatekter");

        for(let index = 0; index<9; index++){
            const elem = new Elem("X",szuloElem);
        }
    }
}


