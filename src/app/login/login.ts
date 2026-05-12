import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements AfterViewInit {
  faceStatus: string = 'Face ID';
  isScanning: boolean = false;

  constructor(private router: Router) { }

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
      this.faceStatus = 'Verified ✓';

      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 500);
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

  onSubmit(event: Event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    if (!usernameInput?.value || !passwordInput?.value) {
      alert('All input fields are required! Please enter your account credentials.');
      return;
    }

    if (this.faceStatus !== 'Verified ✓') {
      alert('FACE DETECT FIRST! Please click the Face ID button to verify your biometric identity.');
      return;
    }

    console.log('Login submitted');
    this.router.navigate(['/dashboard']);
  }
}
