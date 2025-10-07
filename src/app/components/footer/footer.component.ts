import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo } from '../../data/profile.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  personalInfo = personalInfo;
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    {
      name: 'Facebook',
      url: personalInfo.facebook,
      icon: 'facebook'
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.email}`,
      icon: 'email'
    }
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
