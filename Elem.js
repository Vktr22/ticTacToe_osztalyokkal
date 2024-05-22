export default class Elem{
    #ertek="";
    #szuloElem;
    #divElem;
    #index;
    constructor(index, ertek, szuloElem){
        // beállítjuk az adattagokat
        this.#index=index;
        this.#ertek = ertek;
        this.#szuloElem = szuloElem;
        // fgv hívás(nem adattag...)
        this.#megjelenit();

        //eseménykezelő a div elemre
        //a div elem "megfogása"
        this.#divElem=this.#szuloElem.children("div:last-child")

        //console.log(this.#divElem);

        this.#divElem.on("click", ()=>{         //névtelen fgv-ként function-t használva, a this arra a html elemre mutat, amelyik kiváltotta az eseményt. Nyílfgv esetén a this a konkrét objektum példányra mutat.
            //nyílfgv esetén a konkrét objektum példányra mutat
            console.log(this);
            this.#trigger("kattintasom");
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

    //saját esemény létrehozása
    #trigger(esemenyNev){
        //létrehozok egy új, saját eseményt
        const e = CustomEvent(esemenyNev,{detail:this.#index})          //https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
        //az eseményt elérhetővé teszem az egész programban
        window.dispatchEvent(e)
    }
}