import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as data from '../../public/assets/data.json';
import { SummaryComponent } from './summary/summary.component';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SummaryComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'resultSummaryComponent';
  mydata: any = (data as any).default;
  constructor() {}
}
