import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faLink, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faBriefcase = faBriefcase;
  faLink = faLink;
  faCommentDots = faCommentDots;

  emailForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.email,
    ]),
  });

  onSubmit() {
    console.warn(this.emailForm.value);
  }
}
