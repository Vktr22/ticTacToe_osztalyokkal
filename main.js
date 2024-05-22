import JatekTer from "./JatekTer.js";

class Allapotkezelo{
    #jatekLISTA=[" "," "," "," "," "," "," "," "," "];
    #lepes = 0;     // ha a lépésszámláló páros, akkor x következik, ha páratlan akk az o. a lépésszámlálót mindig növeljük, ha rákattintunk egy elemre (div-re)
    constructor(){
        // példányosítjuk a játékteret
        new JatekTer(this.#jatekLISTA);

        //feliratkozom a saját "kattintasom" eseményemre
        $(window).on("kattintasom",(event)=>{
            console.log(event.detail);

            let index = event.detail;
            if(this.#lepes % 2 === 0){
                this.#jatekLISTA[index]="X";
            } else {
                this.#jatekLISTA[index]="O";
            }
            this.#lepes++;

            //újra megjelenítem a program állapotát:
            new JatekTer(this.#jatekLISTA);
        });

    }
}

new Allapotkezelo();





