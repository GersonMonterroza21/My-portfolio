import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { schoolOutline, briefcaseOutline, constructOutline } from 'ionicons/icons';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, IonIcon]
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
  experience = [
    {
      date: '2023 — 2024',
      role: 'Desarrollador Full Stack',
      company: 'Atrás va Solo',
      description: 'Plataforma de consulta de paradas de autobús en tiempo real con +3,500 usuarios activos mensuales. Mejoré la capacidad de respuesta un 40% y reduje el tiempo de carga de 1.8s a 0.9s.',
      techs: ['Vue.js', 'Quasar', 'Firebase', 'CouchDB'],
      link: null,
      isEducation: false,
      icon: 'briefcase-outline'
    },
    {
      date: '2020 — Actualidad',
      role: 'Desarrollador de Sistemas',
      company: 'E-commerce e Inventario',
      description: 'Sistemas de comercio electrónico e inventario para 5 negocios locales. Implementé autenticación, roles y módulos CRUD utilizados por equipos de 10-20 empleados.',
      techs: ['Laravel', 'Firebase', 'PHP'],
      link: null,
      isEducation: false,
      icon: 'construct-outline'
    },
    {
      date: '2019',
      role: 'Técnico en Soporte IT',
      company: 'Alcaldía de El Porvenir',
      description: 'Administración de redes, gestión de Windows Server, soporte técnico y desarrollo de aplicaciones internas.',
      techs: ['Windows Server', 'Redes', 'Linux'],
      link: null,
      isEducation: false,
      icon: 'construct-outline'
    },
    {
      date: '2020 — 2024',
      role: 'Ingeniería de Sistemas Informáticos',
      company: 'Universidad de El Salvador',
      description: 'Título de Ingeniero en Sistemas Informáticos.',
      techs: [],
      link: 'titulo2.pdf',
      isEducation: true,
      icon: 'school-outline'
    },
    {
      date: '2018 — 2019',
      role: 'Técnico en Ingeniería de Sistemas',
      company: 'ITCA-FEPADE',
      description: 'Título de Técnico en Ingeniería de Sistemas Informáticos.',
      techs: [],
      link: 'titulo1.pdf',
      isEducation: true,
      icon: 'school-outline'
    },
  ];

  constructor(private animationService: AnimationService) {
    addIcons({ schoolOutline, briefcaseOutline, constructOutline });
  }

  ngAfterViewInit() {
    const elements = document.querySelectorAll('#experience .fade-up');
    this.animationService.observe(elements);
  }

  ngOnDestroy() {
    this.animationService.disconnect();
  }
}