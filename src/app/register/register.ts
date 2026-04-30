import { Component, inject, AfterViewInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements AfterViewInit {
  private router = inject(Router);
  faceStatus: string = 'Setup Face ID';
  isScanning: boolean = false;

  onFaceScan() {
    if (this.isScanning) return;
    
    this.isScanning = true;
    this.faceStatus = 'Scanning...';
    
    const tl = gsap.timeline();
    
    tl.set('.scan-laser', { opacity: 1, top: '0%' })
      .to('.scan-laser', {
        top: '100%',
        duration: 1.2,
        repeat: 1,
        yoyo: true,
        ease: 'power1.inOut'
      });
      
    tl.to('.scan-bracket', {
      scale: 1.1,
      stroke: '#ffffff',
      duration: 0.3,
      repeat: 3,
      yoyo: true,
      ease: 'power1.inOut',
      transformOrigin: 'center'
    }, 0);

    tl.to('.face-icon-wrapper svg', {
      scale: 1.15,
      duration: 0.3,
      ease: 'back.out(2)',
      yoyo: true,
      repeat: 1
    }, 0.2);

    tl.call(() => {
      this.faceStatus = 'Registered ✓';
      this.isScanning = false;
    });
  }

  ngAfterViewInit() {
    gsap.from('.glass-panel', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    });
    
    gsap.from('.form-section > *', {
      opacity: 0,
      x: -30,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.3
    });
    
    gsap.from('.face-id-section', {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'back.out(1.7)',
      delay: 0.5
    });
  }

  onRegister(event: Event) {
    event.preventDefault();
    
    const userIn = document.getElementById('reg-username') as HTMLInputElement;
    const emailIn = document.getElementById('reg-email') as HTMLInputElement;
    const passIn = document.getElementById('reg-password') as HTMLInputElement;

    if (!userIn?.value || !emailIn?.value || !passIn?.value) {
      alert('All fields are required! Please enter your registration details.');
      return;
    }

    if (this.faceStatus !== 'Registered ✓') {
      alert('Biometric registration required: Please scan your Face ID first!');
      return;
    }

    console.log('Registration submitted');
    this.router.navigate(['/admin-dashboard']);
  }
}
