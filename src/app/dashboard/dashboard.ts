import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements AfterViewInit {
  activeTab: string = 'home';

  ngAfterViewInit() {
    gsap.from('.sidebar', {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.topbar', {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    });

    gsap.from('.page-title', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.4
    });

    gsap.from('.stat-card', {
      scrollTrigger: {
        trigger: '.stat-card',
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: 'back.out(1.5)'
    });

    gsap.from('.content-card', {
      scrollTrigger: {
        trigger: '.content-card',
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    });
  }

  attendanceHistory = [
    { month: 'September 2026', totalDays: 22, present: 20, absent: 2, status: 'Good' },
    { month: 'August 2026', totalDays: 21, present: 21, absent: 0, status: 'Excellent' },
    { month: 'July 2026', totalDays: 23, present: 18, absent: 5, status: 'Average' },
    { month: 'June 2026', totalDays: 20, present: 20, absent: 0, status: 'Excellent' },
    { month: 'May 2026', totalDays: 22, present: 21, absent: 1, status: 'Good' },
    { month: 'April 2026', totalDays: 21, present: 20, absent: 1, status: 'Good' }
  ];

  reportData = [
    { month: 'September 2026', totalHours: '160h 45m', avgCheckIn: '08:55 AM', avgCheckOut: '05:05 PM', lateDays: 1, overtime: '5h 30m' },
    { month: 'August 2026', totalHours: '168h 20m', avgCheckIn: '08:50 AM', avgCheckOut: '05:10 PM', lateDays: 0, overtime: '8h 20m' },
    { month: 'July 2026', totalHours: '144h 10m', avgCheckIn: '09:15 AM', avgCheckOut: '05:00 PM', lateDays: 4, overtime: '0h 0m' },
    { month: 'June 2026', totalHours: '162h 00m', avgCheckIn: '08:58 AM', avgCheckOut: '05:08 PM', lateDays: 0, overtime: '2h 00m' }
  ];

  userProfile = {
    name: 'abc',
    role: 'Senior Software Engineer',
    department: 'Engineering',
    email: 'abc@company.com',
    phone: '1234567890',
    employeeId: 'EMP-2026-042',
    joinDate: 'March 15, 2024',
    biometricStatus: 'Active & Verified',
  };

  setActiveTab(tab: string) {
    this.activeTab = tab;
    
    setTimeout(() => {
      gsap.from('.page-title', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.from('.content-card', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.logs-table tr', {
        opacity: 0,
        y: 15,
        stagger: 0.05,
        duration: 1,
        ease: 'power2.out'
      });
      
      gsap.from('.profile-grid > *', {
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out'
      });
    }, 50);
  }
}
