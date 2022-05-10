import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchText;
  constructor() {}

  ngOnInit(): void {}

  onButtonClick(myInput: HTMLElement) {
    myInput.parentElement.classList.toggle('active');
    console.log('button clicked', myInput);
  }
}
