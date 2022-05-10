import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { catogoryToken } from '../providers';

@Component({
  selector: 'rev-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  categories;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    @Inject(catogoryToken) public cats,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('IronMan', Validators.required),
      year: this.formBuilder.control('2020', this.yearValidator),
      category: this.formBuilder.control('Super-Hero'),
      isFavorite: this.formBuilder.control(''),
    });
  }

  onSubmit(movie) {
    this.movieService.addMovie(movie).subscribe(() => {
      this.router.navigate(['/', movie.category]);
    });
  }

  yearValidator(control: FormControl) {
    const year = parseInt(control.value, 10);
    const minYear = 1800;
    const maxYear = 2200;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { year: { min: minYear, max: maxYear } };
    }
  }
}
