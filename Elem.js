export default class Elem{
    #ertek=""
    #szuloElem;
    constructor(ertek,szuloElem){
        // beállítjuk az adattagokat
        this.#ertek = ertek;
        this.#szuloElem = szuloElem;
        // fgv hívás(nem adattag...)
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