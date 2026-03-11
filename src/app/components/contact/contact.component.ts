import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  form = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit() {
    const elements = document.querySelectorAll('#contact .fade-up, #contact .fade-right');
    this.animationService.observe(elements);
  }

  ngOnDestroy() {
    this.animationService.disconnect();
  }

  sendMessage() {
    if (!this.form.name || !this.form.email || !this.form.message) {
      alert('Por favor completa todos los campos.');
      return;
    }
    console.log('Mensaje enviado:', this.form);
    alert('¡Mensaje enviado! Te contactaré pronto.');
    this.form = { name: '', email: '', message: '' };
  }
}