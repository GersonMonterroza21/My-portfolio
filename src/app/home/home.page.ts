import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeroComponent } from '../components/hero/hero.component';
import { AboutComponent } from '../components/about/about.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ContactComponent } from '../components/contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    NgFor,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent
  ],
})
export class HomePage {
  @ViewChild(NavbarComponent) navbar!: NavbarComponent;

  particles = Array.from({ length: 50 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    delay: `${Math.random() * 8}s`
  }));

  onScroll(event: any) {
    const scrollTop = event.detail.scrollTop;
    if (this.navbar) {
      this.navbar.isScrolled = scrollTop > 50;
      this.navbar.updateActiveSectionByScroll(scrollTop);
    }
  }
}