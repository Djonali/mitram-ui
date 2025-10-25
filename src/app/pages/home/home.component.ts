import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WaitlistModalComponent } from '../../shared/components/waitlist-modal/waitlist-modal.component';
import { WaitlistService, WaitlistFormData } from '../../services/waitlist.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink, WaitlistModalComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    showVideo = false;
    showWaitlistModal = false;
    muted:boolean = true;
    autoPlay: boolean = true;
    poster?:string;

    constructor(private waitlistService: WaitlistService) {}

    openVideo(): void {
        this.showVideo = true;
    }

    closeVideo(): void {
        this.showVideo = false;
    }

    openWaitlistModal(): void {
        this.showWaitlistModal = true;
    }

    closeWaitlistModal(): void {
        this.showWaitlistModal = false;
    }

    onWaitlistSubmit(formData: {name: string, email: string, number?: string}): void {
        console.log('Waitlist form submitted:', formData);
        
        const waitlistData: WaitlistFormData = {
            name: formData.name,
            email: formData.email,
            phone: formData.number
        };

        this.waitlistService.addToWaitlist(waitlistData).subscribe({
            next: (response) => {
                if (response.success) {
                    this.closeWaitlistModal();
                    alert('Thank you for joining our waitlist! We\'ll be in touch soon.');
                } else {
                    alert('Error: ' + response.message);
                }
            },
            error: (error) => {
                console.error('Error submitting waitlist form:', error);
                alert('Sorry, there was an error submitting your information. Please try again.');
            }
        });
    }
}


