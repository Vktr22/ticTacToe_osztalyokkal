import Elem from "./Elem.js";

export default class JatekTer{
    #jatekLISTA=[];
    constructor(jatekLISTA){
        this.#jatekLISTA=jatekLISTA;
        // példányosítjuk az Elem osztályt
        const szuloElem = $(".jatekter");

        for(let index = 0; index < this.#jatekLISTA.length; index++){
            const elem = new Elem(this.#jatekLISTA[index],szuloElem);
        }
    }
}


