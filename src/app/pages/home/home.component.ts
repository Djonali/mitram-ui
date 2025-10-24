import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    showVideo = false;
    muted:boolean = true;
    autoPlay: boolean = true;
    poster?:string;

    openVideo(): void {
        this.showVideo = true;
    }

    closeVideo(): void {
        this.showVideo = false;
    }
}


