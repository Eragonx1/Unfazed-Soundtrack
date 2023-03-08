import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar-v2',
  templateUrl: './navbar-v2.component.html',
  styleUrls: ['./navbar-v2.component.css']
})

export class NavbarV2Component {

  isSecondClassActive = false;

  toggleClass() {
    this.isSecondClassActive = !this.isSecondClassActive;
  }
  
}


/*
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
*/