import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() label = 'This field';
  @Input() control: FormControl | AbstractControl | null = null;
  @Input() showCustomError?: boolean | null = false;

  constructor() {}

  ngOnInit(): void {}
}
