
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { LucideAngularModule } from 'lucide-angular';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnDestroy {

  menuOpen = false;

  // SERVICIOS DE PETCARE
  readonly services = [
    {
      icon: 'stethoscope',
      title: 'Consulta general',
      desc: 'Chequeos completos para prevenir y detectar a tiempo.'
    },
    {
      icon: 'syringe',
      title: 'Vacunación',
      desc: 'Protección esencial según la edad y necesidad de tu mascota.'
    },
    {
      icon: 'heart',
      title: 'Cuidado preventivo',
      desc: 'Planes de bienestar, nutrición y seguimiento personalizado.'
    }
  ];

  // PLATAFORMAS WEB
  // Agrega aquí todas las páginas que quieras mostrar.
  readonly websites = [
    {
      name: 'Landing Page',
      description: 'Nuestra landing page.',
      url: 'https://petcarelanding.vercel.app'
    },
    {
      name: 'Tienda Online',
      description: 'Conoce nuestros productos para mascotas.',
      url: 'https://petcare.labscj.com'
    },
    {
      name: 'Portal de Clientes',
      description: 'Accede a nuestra plataforma para clientes.',
      url: 'https://ejemplo3.com'
    }
 
  ];

  // ANIMACIONES GSAP
  private animationContext?: gsap.Context;

  ngAfterViewInit(): void {

    const ctx = gsap.context(() => {

      // Animación del encabezado
      gsap.from('.hero-copy > *', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.13,
        ease: 'power3.out'
      });

      // Animación de imagen principal
      gsap.from('.hero-photo', {
        scale: 0.92,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });

      // Animaciones al desplazarse
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {

        gsap.from(el, {
          y: 45,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',

          scrollTrigger: {
            trigger: el,
            start: 'top 86%',
            once: true
          }
        });

      });

      // Animación de la huella
      gsap.to('.floating-paw', {
        y: -12,
        rotate: 8,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

    });

    this.animationContext = ctx;
  }

  // LIMPIEZA DE ANIMACIONES
  ngOnDestroy(): void {
    this.animationContext?.revert();
  }

  // MENÚ RESPONSIVE
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

}
