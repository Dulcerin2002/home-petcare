
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import {
  LucideAngularModule,
  Menu,
  X,
  ArrowUpRight,
  Heart,
  ShieldCheck,
  Stethoscope,
  Syringe,
  PawPrint,
  Download,
  CalendarCheck,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Check,
  Star,
  Smartphone,
  Globe
} from 'lucide-angular';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),

    importProvidersFrom(
      LucideAngularModule.pick({
        Menu,
        X,
        ArrowUpRight,
        Heart,
        ShieldCheck,
        Stethoscope,
        Syringe,
        PawPrint,
        Download,
        CalendarCheck,
        MapPin,
        Phone,
        Instagram,
        Facebook,
        Check,
        Star,
        Smartphone,
        Globe
      })
    )
  ]
}).catch((err) => console.error(err));
