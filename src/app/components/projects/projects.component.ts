import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NgFor } from '@angular/common';
import { AnimationService } from '../../services/animation.service';

interface Project {
  title: string;
  description: string;
  category: string;
  techs: string[];
  emoji: string;
  github: string;
  demo: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('track') track!: ElementRef;

  filters = ['ALL', 'FRONTEND', 'BACKEND', 'FULLSTACK'];
  activeFilter = 'ALL';
  currentIndex = 0;

  projects: Project[] = [
    {
      title: 'Portfolio Personal',
      description: 'Portafolio moderno con Ionic + Angular, animaciones y dark mode.',
      category: 'FRONTEND',
      techs: ['Angular', 'Ionic', 'SCSS'],
      emoji: '🚀',
      github: '#',
      demo: '#'
    },
    {
      title: 'E-commerce App',
      description: 'Tienda online con carrito de compras y pasarela de pagos.',
      category: 'FULLSTACK',
      techs: ['Angular', 'Node.js', 'MongoDB'],
      emoji: '🛒',
      github: '#',
      demo: '#'
    },
    {
      title: 'REST API',
      description: 'API RESTful con autenticación JWT y documentación Swagger.',
      category: 'BACKEND',
      techs: ['Node.js', 'Express', 'JWT'],
      emoji: '⚙️',
      github: '#',
      demo: '#'
    },
    {
      title: 'Dashboard Admin',
      description: 'Panel de administración con gráficas y gestión de usuarios.',
      category: 'FRONTEND',
      techs: ['Angular', 'TypeScript', 'Charts'],
      emoji: '📊',
      github: '#',
      demo: '#'
    },
    {
      title: 'App Móvil',
      description: 'Aplicación móvil multiplataforma con Ionic y Capacitor.',
      category: 'FULLSTACK',
      techs: ['Ionic', 'Angular', 'Capacitor'],
      emoji: '📱',
      github: '#',
      demo: '#'
    },
  ];

  filteredProjects: Project[] = [];
  dotsArray: number[] = [];

  constructor(private animationService: AnimationService) {}

  get isAtEnd(): boolean {
    return this.currentIndex >= this.filteredProjects.length - 1;
  }

  get cardWidth(): number {
    if (window.innerWidth < 600) return window.innerWidth * 0.9;
    if (window.innerWidth < 900) return window.innerWidth * 0.45;
    return (window.innerWidth * 0.85) / 3;
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
