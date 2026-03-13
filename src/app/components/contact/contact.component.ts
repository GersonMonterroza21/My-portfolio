import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, logoGithub, logoLinkedin, downloadOutline } from 'ionicons/icons';
import { AnimationService } from '../../services/animation.service';
import { LanguageService } from '../../translations';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [FormsModule, IonIcon, NgIf]
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  form = { name: '', email: '', message: '' };
  touched = { name: false, email: false, message: false };
  sending = false;
  sent = false;
  error = false;

  readonly MIN_MESSAGE = 20;

  constructor(
    private animationService: AnimationService,
    public lang: LanguageService
  ) {
    addIcons({ mailOutline, logoGithub, logoLinkedin, downloadOutline });
  }

  ngAfterViewInit() {
    const elements = document.querySelectorAll('#contact .fade-up, #contact .fade-right');
    this.animationService.observe(elements);
  }

  ngOnDestroy() {
    this.animationService.disconnect();
  }

  get nameError(): string {
    if (!this.touched.name) return '';
    if (!this.form.name.trim()) return this.lang.current() === 'ES' ? 'El nombre es requerido.' : 'Name is required.';
    return '';
  }

  get emailError(): string {
    if (!this.touched.email) return '';
    if (!this.form.email.trim()) return this.lang.current() === 'ES' ? 'El correo es requerido.' : 'Email is required.';
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email);
    if (!valid) return this.lang.current() === 'ES' ? 'Ingresa un correo válido.' : 'Enter a valid email.';
    return '';
  }

  get messageError(): string {
    if (!this.touched.message) return '';
    if (!this.form.message.trim()) return this.lang.current() === 'ES' ? 'El mensaje es requerido.' : 'Message is required.';
    if (this.form.message.trim().length < this.MIN_MESSAGE)
      return this.lang.current() === 'ES'
        ? `Mínimo ${this.MIN_MESSAGE} caracteres (faltan ${this.MIN_MESSAGE - this.form.message.trim().length}).`
        : `Minimum ${this.MIN_MESSAGE} characters (${this.MIN_MESSAGE - this.form.message.trim().length} left).`;
    return '';
  }

  get isValid(): boolean {
    return !this.nameError && !this.emailError && !this.messageError &&
      !!this.form.name && !!this.form.email && !!this.form.message;
  }

  touch(field: 'name' | 'email' | 'message') {
    this.touched[field] = true;
  }

  async sendMessage() {
    this.touched = { name: true, email: true, message: true };
    if (!this.isValid) return;

    this.sending = true;
    this.sent = false;
    this.error = false;

    try {
      await emailjs.send(
        'service_xtu5jxu',
        'template_wr4oa8u',
        {
          from_name: this.form.name,
          from_email: this.form.email,
          message: this.form.message
        },
        'naRLVcoeuxXuSNBJh'
      );
      this.sent = true;
      this.form = { name: '', email: '', message: '' };
      this.touched = { name: false, email: false, message: false };
    } catch (err) {
      this.error = true;
    } finally {
      this.sending = false;
    }
  }
}