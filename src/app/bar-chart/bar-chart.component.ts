import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges {
  @Input() title = '';
  @Input() data!: ChartConfiguration['data'];

  options: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: ''
      }
    }
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title']) {
      const text = this.title || '';
      (this.options.plugins as any).title = { display: true, text };
    }
  }
}
