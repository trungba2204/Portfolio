import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { personalInfo } from '../../data/profile.data';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  personalInfo = personalInfo;
  
  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };
  
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', this.formData);
        this.isSubmitting = false;
        this.submitSuccess = true;
        
        // Reset form
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 3000);
      }, 1000);
    }
  }
}
