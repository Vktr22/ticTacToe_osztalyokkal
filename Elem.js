export default class Elem{
    #ertek="";
    #szuloElem;
    #divElem;
    constructor(ertek,szuloElem){
        // beállítjuk az adattagokat
        this.#ertek = ertek;
        this.#szuloElem = szuloElem;
        // fgv hívás(nem adattag...)
        this.#megjelenit();

        //eseménykezelő a div elemre
        //a div elem "megfogása"
        this.#divElem=this.#szuloElem.children("div:last-child")
        console.log(this.#divElem);
        this.#divElem.on("click", ()=>{         //névtelen fgv-ként function-t használva, a this arra a html elemre mutat, amelyik kiváltotta az eseményt. Nyílfgv esetén a this a konkrét objektum példányra mutat.
            //nyílfgv esetén a konkrét objektum példányra mutat
            console.log(this);
        })
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