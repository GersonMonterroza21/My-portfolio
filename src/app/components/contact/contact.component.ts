import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };

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
