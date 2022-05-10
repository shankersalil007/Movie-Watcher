import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'rev-mov',
  templateUrl: './mov.component.html',
  styleUrls: ['./mov.component.css'],
})
export class MovComponent implements OnInit {
  @Input() movie;
  @Output() otp = new EventEmitter();

  constructor(private ms: MovieService, private router: Router) {}

  ngOnInit() {}

  onDelete() {
    // this.otp.emit(this.movie);
    console.log('deleting ' + this.movie);
    this.ms.deleteMovie(this.movie).subscribe(() => {
      // console.log('deleted ');
      // this.router.navigate(['/', 'All']);
    });
  }
}
