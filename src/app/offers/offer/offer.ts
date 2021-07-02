export class Offer {
  id: number;
  name: string;
  category: string;
  ogloszenie: string;

  constructor(id: number, name: string, category: string, ogloszenie: string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.ogloszenie = ogloszenie;
  }
}
