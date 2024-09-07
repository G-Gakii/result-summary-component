import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent implements OnInit {
  @Input() resultData: any;
  total: number = 0;
  average: number = 0;

  ngOnInit(): void {
    this.resultData.forEach((data: any) => {
      this.total += data.score;
    });

    this.average = Math.trunc(this.total / this.resultData.length);
  }
}
