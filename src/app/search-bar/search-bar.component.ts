import { Component, HostBinding, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchText;
  constructor(private ms: MovieService) {}

  ngOnInit(): void {}

  onButtonClick(myInput: HTMLElement) {
    myInput.parentElement.classList.toggle('active');
  }

  onChange(newValue) {
    this.ms.moviesFiltered.emit(newValue);
  }
}
