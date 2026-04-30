import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterLink],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements AfterViewInit {
  activeTab: string = 'dashboard';
  searchQuery: string = '';

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
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: 'back.out(1.5)',
      delay: 0.5
    });

    gsap.from('.content-card', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      delay: 0.8
    });
  }
  filterStatus: string = 'All';
  selectedUser: any = null;

  users = [
    {
      id: 'USR-001',
      name: 'Abc',
      email: 'abc@company.com',
      phone: '1234567890',
      role: 'Admin',
      status: 'Active',
      lastLogin: 'Today, 08:30 AM',
      avatar: 'https://ui-avatars.com/api/?name=AD&background=3b82f6&color=fff&size=150/pngtree-vector-business-men-icon-png-image_956508.jpg',
      todayStatus: 'Present',
      attendanceHistory: [
        { date: 'Oct 24, 2026', status: 'Present', checkIn: '08:30 AM', checkOut: '05:00 PM' },
        { date: 'Oct 23, 2026', status: 'Present', checkIn: '08:45 AM', checkOut: '05:15 PM' },
        { date: 'Oct 22, 2026', status: 'Absent', checkIn: '--', checkOut: '--' },
      ],
      faceImages: [
        'assets/face_scan_hud.png',
        'assets/face_scan_hud.png'
      ]
    },
    {
      id: 'USR-002',
      name: 'abc',
      email: 'abc@company.com',
      phone: '1234567890',
      role: 'User',
      status: 'Active',
      lastLogin: 'Today, 09:15 AM',
      avatar: 'https://ui-avatars.com/api/?name=AB&background=3b82f6&color=fff&size=150://ui-avatars.com/api/?name=Bob+Smith&background=38d39f&color=fff',
      todayStatus: 'Present',
      attendanceHistory: [
        { date: 'Oct 24, 2026', status: 'Present', checkIn: '09:15 AM', checkOut: 'In Progress' },
      ],
      faceImages: [
        'assets/face_scan_hud.png'
      ]
    },
    {
      id: 'USR-003',
      name: 'abc',
      email: 'abc@company.com',
      phone: '1234567890',
      role: 'User',
      status: 'Inactive',
      lastLogin: 'Oct 10, 2026',
      avatar: 'https://ui-avatars.com/api/?name=AB&background=3b82f6&color=fff&size=15://ui-avatars.com/api/?name=Charlie+Davis&background=ff6b6b&color=fff',
      todayStatus: 'Absent',
      attendanceHistory: [
        { date: 'Oct 24, 2026', status: 'Absent', checkIn: '--', checkOut: '--' },
      ],
      faceImages: []
    },
    {
      id: 'USR-004',
      name: 'abcd',
      email: 'abc@company.com',
      phone: '1234567890',
      role: 'User',
      status: 'Inactive',
      lastLogin: 'Oct 10, 2026',
      avatar: 'https://ui-avatars.com/api/?name=AB&background=3b82f6&color=fff&size=15://ui-avatars.com/api/?name=Charlie+Davis&background=ff6b6b&color=fff',
      todayStatus: 'Absent',
      attendanceHistory: [
        { date: 'Oct 24, 2026', status: 'Absent', checkIn: '--', checkOut: '--' },
      ],
      faceImages: []
    }
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
    
    setTimeout(() => {
      gsap.from('.page-title', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out'
      });

      gsap.from('.content-card', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.logs-table tr', {
        opacity: 0,
        y: 15,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power2.out'
      });
    }, 50);
  }

  viewUser(user: any) {
    this.selectedUser = user;
  }

  closeModal() {
    this.selectedUser = null;
  }
}
