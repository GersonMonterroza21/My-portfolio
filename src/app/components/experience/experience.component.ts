import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class ExperienceComponent {
  experience = [
    {
      date: '2023 — Presente',
      role: 'Full Stack Developer',
      company: 'Empresa Actual',
      description: 'Desarrollo de aplicaciones web y móviles con Angular e Ionic. Implementación de APIs REST y gestión de bases de datos.',
      techs: ['Angular', 'Ionic', 'Node.js']
    },
    {
      date: '2022 — 2023',
      role: 'Frontend Developer',
      company: 'Empresa Anterior',
      description: 'Creación de interfaces modernas y responsivas. Trabajo en equipo con metodologías ágiles.',
      techs: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      date: '2021 — 2022',
      role: 'Junior Developer',
      company: 'Primera Empresa',
      description: 'Desarrollo de componentes web, mantenimiento de proyectos existentes y aprendizaje de buenas prácticas.',
      techs: ['HTML', 'CSS', 'JavaScript']
    },
  ];
}
