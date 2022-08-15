import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const img =document.getElementById("logo") as HTMLImageElement;
    img.src="../../assets/IMG/logo.png";
    this.addListNavEntity();


  }
  private addListNavEntity(){
    const genderOptions=['Home', 'Owners', 'Cars', 'Insurance'];
    const parentLi=document.getElementById("nav-entity");
    genderOptions.forEach(item => {
      const element =document.createElement("li")
      const elementChild =document.createElement("a")
      elementChild.innerText=item;
      elementChild.href="#";
      element.classList.add("entity");
      parentLi?.append(element);
      element.append(elementChild);
    });
}

}
