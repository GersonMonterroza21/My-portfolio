import { Injectable, signal } from '@angular/core';

export type Lang = 'ES' | 'EN';

export const T = {
  ES: {
    nav_inicio: 'Inicio',
    nav_sobre: 'Sobre mí',
    nav_proyectos: 'Proyectos',
    nav_experiencia: 'Exp.',
    nav_contacto: 'Contacto',
    hero_subtitle: 'INGENIERO DE SISTEMAS INFORMÁTICOS',
    hero_title: 'Transformando ideas en',
    hero_desc: 'Hola, soy <strong>Gerson Monterroza</strong>, Ingeniero en Sistemas con experiencia en desarrollo web full-stack, gestión de bases de datos y soluciones en la nube.',
    hero_btn_proyectos: 'Ver proyectos',
    hero_btn_contacto: 'Contáctame',
    about_title: 'SOBRE MÍ',
    about_tagline: 'Ingeniero en Sistemas enfocado en construir aplicaciones escalables y de impacto real.',
    about_text: 'Ingeniero en Sistemas Computacionales con experiencia en desarrollo web full-stack, gestión de bases de datos y soluciones en la nube. Domino frameworks modernos como Vue.js, Quasar y Laravel, además de arquitecturas basadas en APIs y aplicaciones en tiempo real. Me apasiona el código limpio, las arquitecturas escalables y el aprendizaje continuo.',
    about_years: 'AÑOS EXP.',
    about_projects: 'TECNOLOGIAS',
    about_techs: 'IDIOMAS',
    about_db: 'BASE DE DATOS',
    about_tools: 'HERRAMIENTAS',
    about_languages: 'IDIOMAS',
    about_spanish: 'Español Nativo',
    about_english: 'Inglés Avanzado',
    projects_title: 'PROYECTOS',
    experience_title: 'EXPERIENCIA',
    exp_ver_titulo: 'Ver título',
    contact_title: 'CONTACTO',
    contact_question: '¿Tienes un proyecto en mente?',
    contact_text: 'Estoy listo para llevar tus ideas al siguiente nivel. Escríbeme y hablemos sobre cómo puedo ayudarte.',
    contact_redes: 'REDES SOCIALES',
    contact_cv: 'Descargar CV',
    contact_nombre: 'NOMBRE',
    contact_email: 'CORREO ELECTRÓNICO',
    contact_mensaje: 'TU MENSAJE',
    contact_placeholder_nombre: 'Tu nombre',
    contact_placeholder_email: 'tu@email.com',
    contact_placeholder_mensaje: 'Cuéntame sobre tu proyecto...',
    contact_btn_enviar: 'ENVIAR MENSAJE',
    contact_btn_enviando: 'ENVIANDO...',
    contact_success: '¡Mensaje enviado! Te contactaré pronto.',
    contact_error: 'Hubo un error. Intenta de nuevo.',
  },
  EN: {
    nav_inicio: 'Home',
    nav_sobre: 'About',
    nav_proyectos: 'Projects',
    nav_experiencia: 'Exp.',
    nav_contacto: 'Contact',
    hero_subtitle: 'SYSTEMS ENGINEER',
    hero_title: 'Transforming ideas into',
    hero_desc: 'Hello, I\'m <strong>Gerson Monterroza</strong>, a Systems Engineer with experience in full-stack web development, database management and cloud solutions.',
    hero_btn_proyectos: 'View projects',
    hero_btn_contacto: 'Contact me',
    about_title: 'ABOUT ME',
    about_tagline: 'Systems Engineer focused on building scalable, real-world applications.',
    about_text: 'Systems Engineer with experience in full-stack web development, database management and cloud solutions. I master modern frameworks like Vue.js, Quasar and Laravel, as well as API-based architectures and real-time applications. I am passionate about clean code, scalable architectures and continuous learning.',
    about_years: 'YRS EXP.',
    about_projects: 'TECHNOLOGIES',
    about_techs: 'LANGUAGES',
    about_db: 'DATABASE',
    about_tools: 'TOOLS',
    about_languages: 'LANGUAGES',
    about_spanish: 'Spanish Native',
    about_english: 'English Advanced',
    projects_title: 'PROJECTS',
    experience_title: 'EXPERIENCE',
    exp_ver_titulo: 'View degree',
    contact_title: 'CONTACT',
    contact_question: 'Do you have a project in mind?',
    contact_text: 'I\'m ready to take your ideas to the next level. Write to me and let\'s talk about how I can help you.',
    contact_redes: 'SOCIAL MEDIA',
    contact_cv: 'Download CV',
    contact_nombre: 'NAME',
    contact_email: 'EMAIL ADDRESS',
    contact_mensaje: 'YOUR MESSAGE',
    contact_placeholder_nombre: 'Your name',
    contact_placeholder_email: 'you@email.com',
    contact_placeholder_mensaje: 'Tell me about your project...',
    contact_btn_enviar: 'SEND MESSAGE',
    contact_btn_enviando: 'SENDING...',
    contact_success: 'Message sent! I\'ll get back to you soon.',
    contact_error: 'Something went wrong. Please try again.',
  }
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  current = signal<Lang>('EN');

  constructor() {
    const saved = localStorage.getItem('lang') as Lang;
    if (saved === 'ES' || saved === 'EN') this.current.set(saved);
  }

  get t() { return T[this.current()]; }

  toggle() {
    const next: Lang = this.current() === 'ES' ? 'EN' : 'ES';
    this.current.set(next);
    localStorage.setItem('lang', next);
  }
}