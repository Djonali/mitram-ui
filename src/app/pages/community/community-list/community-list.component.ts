import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
    selector: 'app-community-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './community-list.component.html',
    styles: []
})
export class CommunityListComponent {
    @Output() selectCommunity = new EventEmitter<number>();

    constructor(private router: Router) { }

    onCommunityClick(communityId: number): void {
        this.selectCommunity.emit(communityId);
        this.router.navigate(['/community/detail', communityId]);
    }

    communities = [
        {
            id: 1,
            name: 'ADHD Power Circle',
            category: 'Support Group',
            members: '1.2k',
            otherMembers: 12,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEykk2q2MLkwtTdvNUqNRL2hrsmNGVY8qptijobdoRkamWgLv78jZrruU6yH6usFjtYlCz3dUid1uxOeaqgy9RNYByp42GE4opSmy4Sfvta3TyZp137nxxply3lGX1Yna0s0e6sU4g73UO0lBGCO0ua3Z-KUUlgc0M4HTVT09wI8tMEnKSNk52cQluOfXl3AsqAjRgt-k0HHsD--Rbd7X-cVCef5jKffRvq9II5zP59JG8MiH6FmWE_bepGeK6SDEX1ijABqAhgR4c',
            description: 'A safe space for adults with ADHD to share strategies, celebrate small wins, and navigate daily challenges together. We focus on executive function tips.',
            hasIcon: false
        },
        {
            id: 2,
            name: 'Mindful Mornings',
            category: 'Wellness',
            members: '850',
            otherMembers: 8,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAdCcigu6u64UzO3R9ZmLYRwy6UDEOYv0ZhRwrIUlBAP8ogtVH3Wq5DXAkJnJGMs-CI2G1ZJD1sNMUu5mVi3hoJsz17iHBHKl3GP6806u5TjIEtavHVKawftRVNNVSAssOkUpAVguEQBfZItMLqaZv76R1osA_qw6Bb_by1s91TxqxYXSCuyvRKWsqwJDb8ii3v3SoLrXYxUA3fHonkGr4Usj8kDWjM__Yxlv321l0knF5dO4XcVLQlHHrJIzgc-TXZcZLi8e9Jg0W',
            description: 'Start your day with intention. Daily guided meditation prompts, breathing exercises, and gratitude journaling prompts shared by community members.',
            hasIcon: false
        },
        {
            id: 3,
            name: 'Green Souls Volunteers',
            category: 'NGO',
            members: '3.4k',
            otherMembers: 45,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB384RmnlKMpzHxJ5GCjE_ksgyjuqckadzx_amIYDNtprX2Cc84NYsSHlOVhfNkvMADMwpoT7EB_xo1nyjTKKZBtDWocm92ewSvlYyjeIumvJT9fJjV-XxqZqYnKgsLedRVa7QvO2g9Rx3d8GXZkrS_b7VCwA_qYM4eJNcrxnr-pUrtDZ0YCZyHjnqJfp_a_AdD7zW_kVYqiMHOAb8FEX774sxskY3EFqCPG0wko0Y9c_7yxsnbHadOsHsBzKj6NqbFvRldcKLAZnWO',
            description: 'Connect with local NGOs and participate in mental health awareness drives. Be a part of the change you wish to see in the world.',
            hasIcon: false
        },
        {
            id: 4,
            name: 'Art Therapy Corner',
            category: 'Hobbies',
            members: '420',
            otherMembers: 5,
            image: '',
            description: 'Express yourself through colors and canvas. Weekly themes and sharing sessions to help process emotions through art.',
            hasIcon: true,
            icon: 'palette'
        },
        {
            id: 5,
            name: 'Student Stress Relief',
            category: 'Student',
            members: '2.1k',
            otherMembers: 99,
            image: '',
            description: 'For university students balancing exams, life, and mental health. Exam stress management tips and peer support.',
            hasIcon: true,
            icon: 'school'
        },
        {
            id: 6,
            name: 'LGBTQ+ Allies',
            category: 'Identity',
            members: '560',
            otherMembers: 20,
            image: '',
            description: 'An inclusive space for the LGBTQ+ community and allies. Share stories, find resources, and build connections.',
            hasIcon: true,
            icon: 'diversity_3'
        }
    ];
}