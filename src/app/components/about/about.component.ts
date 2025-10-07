import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo, education } from '../../data/profile.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  personalInfo = personalInfo;
  education = education;
}
