import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rev-mov',
  templateUrl: './mov.component.html',
  styleUrls: ['./mov.component.css'],
})
export class MovComponent implements OnInit {
  @Input() movie;
  @Output() otp = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onDelete() {
    this.otp.emit(this.movie);
  }
}
