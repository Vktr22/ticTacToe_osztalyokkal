export default class Elem{
    #ertek=""
    #szuloElem;
    constructor(ertek,szuloElem){
        this.#ertek = ertek;
        this.#szuloElem = szuloElem;
        this.#megjelenit();
    }

    #megjelenit(){
        //elkészítjük a html kódot
        let txt = `
            <div class="elem">
                <p>${this.#ertek}</p>
            </div>`;
        this.#szuloElem.append(txt);
    }
}