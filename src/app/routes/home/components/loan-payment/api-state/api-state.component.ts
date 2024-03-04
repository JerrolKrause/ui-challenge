import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-api-state',
  templateUrl: './api-state.component.html',
  styleUrls: ['./api-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiStateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
