import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo } from '../../data/profile.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  personalInfo = personalInfo;

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
