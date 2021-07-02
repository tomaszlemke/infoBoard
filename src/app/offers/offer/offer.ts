export class Offer {
  id: number;
  name: string;
  category: string;
  offerDetails: string;
  isSelected: boolean;


  constructor(id: number, name: string, category: string, offerDetails: string, isSelected: boolean) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.offerDetails = offerDetails;
    this.isSelected = isSelected;
  }
}
