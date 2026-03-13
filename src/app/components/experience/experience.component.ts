import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { schoolOutline, briefcaseOutline, constructOutline } from 'ionicons/icons';
import { AnimationService } from '../../services/animation.service';
import { LanguageService } from '../../translations';

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
      roleES: 'Desarrollador Full Stack',
      roleEN: 'Full Stack Developer',
      company: 'Atrás va Solo',
      descES: 'Plataforma de consulta de paradas de autobús en tiempo real con +3,500 usuarios activos mensuales. Mejoré la capacidad de respuesta un 40% y reduje el tiempo de carga de 1.8s a 0.9s.',
      descEN: 'Real-time bus stop query platform with +3,500 monthly active users. Improved response capacity by 40% and reduced load time from 1.8s to 0.9s.',
      techs: ['Vue.js', 'Quasar', 'Firebase', 'CouchDB'],
      link: null,
      isEducation: false,
      icon: 'briefcase-outline'
    },
    {
      date: '2020 — Actualidad',
      roleES: 'Desarrollador de Sistemas',
      roleEN: 'Systems Developer',
      company: 'E-commerce e Inventario',
      descES: 'Sistemas de comercio electrónico e inventario para negocios locales. Implementé autenticación, roles y módulos CRUD utilizados por equipos de 10-20 empleados.',
      descEN: 'E-commerce and inventory systems for local businesses. Implemented authentication, roles and CRUD modules used by teams of 10-20 employees.',
      techs: ['Laravel', 'Firebase', 'PHP'],
      link: null,
      isEducation: false,
      icon: 'construct-outline'
    },
    {
      date: '2019',
      roleES: 'Técnico en Soporte IT',
      roleEN: 'IT Support Technician',
      company: 'Alcaldía de El Porvenir',
      descES: 'Administración de redes, gestión de Windows Server, soporte técnico y desarrollo de aplicaciones internas.',
      descEN: 'Network administration, Windows Server management, technical support and internal application development.',
      techs: ['Windows Server', 'Redes', 'Linux'],
      link: null,
      isEducation: false,
      icon: 'construct-outline'
    },
    {
      date: '2020 — 2024',
      roleES: 'Ingeniería de Sistemas Informáticos',
      roleEN: 'Computer Systems Engineering',
      company: 'Universidad de El Salvador',
      descES: 'Título de Ingeniero en Sistemas Informáticos.',
      descEN: 'Bachelor\'s degree in Computer Systems Engineering.',
      techs: [],
      link: 'titulo2.pdf',
      isEducation: true,
      icon: 'school-outline'
    },
    {
      date: '2018 — 2019',
      roleES: 'Técnico en Ingeniería de Sistemas',
      roleEN: 'Systems Engineering Technician',
      company: 'ITCA-FEPADE',
      descES: 'Título de Técnico en Ingeniería de Sistemas Informáticos.',
      descEN: 'Technical degree in Computer Systems Engineering.',
      techs: [],
      link: 'titulo1.pdf',
      isEducation: true,
      icon: 'school-outline'
    },
  ];

  constructor(
    private animationService: AnimationService,
    public lang: LanguageService
  ) {
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