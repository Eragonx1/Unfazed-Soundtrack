import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar-v2',
  templateUrl: './search-bar-v2.component.html',
  styleUrls: ['./search-bar-v2.component.css']
})
export class SearchBarV2Component {
  searchStr:string;
  searchMusic(){
    console.log(this.searchStr);
  }
}
