import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions} from 'chart.js';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BaseChartDirective, BarChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard-project';
  author = 'Delfino DG';
  // Bar Chart
  barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales',
      },
    },
  };

  barChartData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales 2024',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Line Chart
  lineChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'User Growth',
      },
    },
  };

  lineChartData: ChartConfiguration['data'] = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Active Users',
        data: [100, 150, 120, 200, 180],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };
  // Pie Chart
  ngOnInit() {
    this.fetchProjectMetrics();
  }

  fetchProjectMetrics() {
    // Fetch project metrics logic here
  }
  doughnutChartOptions: ChartOptions = {

    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Completed Tasks Per Project',
      },
    },
  };

  doughnutChartData: ChartConfiguration['data'] = {
    labels: ['Project A', 'Project B', 'Project C', 'Project D'],
    datasets: [
      {
        label: 'Completed Tasks',
        data: [12, 19, 8, 15],
        backgroundColor: [
          'rgba(75, 192, 192, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 193, 7, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 193, 7, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

    // Pie Chart
  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Project Status',
      },
    },
  };

  pieChartData: ChartConfiguration['data'] = {
    labels: ['Completed', 'Active', 'Pending'],
    datasets: [
      {
        data: [8, 4, 0],
        backgroundColor: [
          'rgba(75, 192, 192, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 193, 7, 0.7)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 193, 7, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  // Project Metrics
  projectMetrics = {
  totalProjects: 12,
  completedProjects: 8,
  activeProjects: 4,
  successRate: 67,
  };
}
