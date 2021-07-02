import {Component} from "@angular/core";


@Component({
  selector: 'ogloszenie',
  templateUrl: "ogloszenie.components.html",

})

export class OgloszenieComponent{
  tekst = "Kupie stronę w Angluar";


  constructor() {

  }

  getTekst(){
    return this.tekst
  }


}
