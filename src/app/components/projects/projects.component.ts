import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects, experiences } from '../../data/profile.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = projects;
  experiences = experiences;

  openLink(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
