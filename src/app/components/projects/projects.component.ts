import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { AnimationService } from '../../services/animation.service';
import { LanguageService } from '../../translations';

interface Project {
  titleES: string;
  titleEN: string;
  descES: string;
  descEN: string;
  category: string;
  techs: string[];
  image: string;
  github: string;
  demo: string;
  store?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf]
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('track') track!: ElementRef;

  filters = ['ALL', 'FRONTEND', 'BACKEND', 'FULLSTACK'];
  activeFilter = 'ALL';
  currentIndex = 0;

  projects: Project[] = [
    {
      titleES: 'Atrás va Solo App',
      titleEN: 'Atrás va Solo App',
      descES: 'Plataforma web y móvil de consulta de paradas de autobús en tiempo real. +10,000 descargas en Play Store y 3,500+ usuarios activos mensuales.',
      descEN: 'Web and mobile platform for real-time bus stop queries. +10,000 downloads on Play Store and 3,500+ monthly active users.',
      category: 'FULLSTACK',
      techs: ['Vue.js', 'Quasar', 'Firebase', 'CouchDB'],
      image: 'assets/1.png',
      github: 'https://github.com/diseno2023/atrasvasolo',
      demo: 'https://atrasvasolo.com/#/',
      store: 'https://play.google.com/store/apps/details?id=com.atrasvasolo'
    },
    {
      titleES: 'Atrás va Solo Website',
      titleEN: 'Atrás va Solo Website',
      descES: 'Sitio web informativo de la plataforma Atrás va Solo, con información sobre la app, rutas y paradas disponibles.',
      descEN: 'Informational website for the Atrás va Solo platform, with information about the app, routes and available stops.',
      category: 'FRONTEND',
      techs: ['React', 'HTML5', 'CSS3'],
      image: 'assets/2.png',
      github: 'https://github.com/diseno2023/atrasvasolo',
      demo: 'https://website.atrasvasolo.com',
    },
    {
      titleES: 'E-commerce e Inventario',
      titleEN: 'E-commerce & Inventory',
      descES: 'Sistemas de comercio electrónico e inventario para negocios locales, manejando entre 100 y 150 operaciones diarias.',
      descEN: 'E-commerce and inventory systems for local businesses, handling between 100 and 150 daily operations.',
      category: 'FULLSTACK',
      techs: ['Laravel', 'Firebase', 'PHP'],
      image: 'assets/3.jpeg',
      github: 'https://github.com/GersonMonterroza21/inventario-libreria',
      demo: '#',
    },
    {
      titleES: 'Portafolio Personal',
      titleEN: 'Personal Portfolio',
      descES: 'Portafolio moderno con Ionic + Angular, animaciones, dark/light mode y soporte multiidioma.',
      descEN: 'Modern portfolio built with Ionic + Angular, animations, dark/light mode and multilanguage support.',
      category: 'FRONTEND',
      techs: ['Ionic', 'Angular', 'TypeScript'],
      image: 'assets/4.png',
      github: 'https://github.com/GersonMonterroza21/My-portfolio',
      demo: 'https://gersonfullstack.netlify.app',
    },
  ];

  filteredProjects: Project[] = [];
  dotsArray: number[] = [];

  constructor(
    private animationService: AnimationService,
    public lang: LanguageService
  ) {}

  get isAtEnd(): boolean {
    return this.currentIndex >= this.filteredProjects.length - 1;
  }

  get cardWidth(): number {
    const trackEl = this.track?.nativeElement;
    if (!trackEl) return 300;
    const trackWidth = trackEl.offsetWidth;
    if (window.innerWidth < 600) return trackWidth;
    if (window.innerWidth < 900) return (trackWidth - 20) / 2;
    return (trackWidth - 40) / 3;
  }

  ngOnInit() {
    this.filteredProjects = this.projects;
    this.updateDots();
  }

  ngAfterViewInit() {
    const elements = document.querySelectorAll('#projects .fade-up');
    this.animationService.observe(elements);
  }

  ngOnDestroy() {
    this.animationService.disconnect();
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.currentIndex = 0;
    this.filteredProjects = filter === 'ALL'
      ? this.projects
      : this.projects.filter(p => p.category === filter);
    this.updateDots();
    this.scrollTrack();
  }

  updateDots() {
    this.dotsArray = Array.from({ length: this.filteredProjects.length }, (_, i) => i);
  }

  next() {
    if (!this.isAtEnd) {
      this.currentIndex++;
      this.scrollTrack();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollTrack();
    }
  }

  goTo(index: number) {
    this.currentIndex = index;
    this.scrollTrack();
  }

  scrollTrack() {
    if (this.track) {
      const el = this.track.nativeElement;
      el.scrollTo({ left: this.currentIndex * (this.cardWidth + 24), behavior: 'smooth' });
    }
  }
}
