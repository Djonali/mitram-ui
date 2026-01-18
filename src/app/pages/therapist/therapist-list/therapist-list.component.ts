import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface Therapist {
    id: number;
    name: string;
    title: string;
    image: string;
    availability: string;
    availabilityTag: 'available-today' | 'next-slot' | 'available-week';
    rating: number;
    reviews: number;
    specialties: string[];
    description: string;
    languages: string[];
    experience: string;
    price: number;
    duration: number;
    isFavorite: boolean;
}

@Component({
    selector: 'app-therapist-list',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './therapist-list.component.html',
    styleUrls: ['./therapist-list.component.scss']
})
export class TherapistListComponent {
    searchQuery: string = '';
    sortBy: string = 'Recommended';
    selectedSpecialty: string = 'Anxiety & Depression';
    selectedLanguage: string = 'English';
    selectedAvailability: string = 'Anytime';
    minPrice: number = 0;
    maxPrice: number = 500;
    showMoreSpecialties: boolean = false;

    therapists: Therapist[] = [
        {
            id: 1,
            name: 'Dr. Sarah Jenning',
            title: 'Clinical Psychologist, PhD',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEykk2q2MLkwtTdvNUqNRL2hrsmNGVY8qptijobdoRkamWgLv78jZrruU6yH6usFjtYlCz3dUid1uxOeaqgy9RNYByp42GE4opSmy4Sfvta3TyZp137nxxply3lGX1Yna0s0e6sU4g73UO0lBGCO0ua3Z-KUUlgc0M4HTVT09wI8tMEnKSNk52cQluOfXl3AsqAjRgt-k0HHsD--Rbd7X-cVCef5jKffRvq9II5zP59JG8MiH6FmWE_bepGeK6SDEX1ijABqAhgR4c',
            availability: 'Available Today',
            availabilityTag: 'available-today',
            rating: 4.9,
            reviews: 124,
            specialties: ['Anxiety', 'Depression', 'Cognitive Behavioral Therapy'],
            description: 'Specializing in CBT for anxiety and depression. I believe in creating a safe, non-judgmental space for my clients to explore their feelings and develop coping strategies.',
            languages: ['English', 'Spanish'],
            experience: '10+ Years Exp.',
            price: 120,
            duration: 50,
            isFavorite: false
        },
        {
            id: 2,
            name: 'Michael Chen',
            title: 'Licensed Marriage & Family Therapist',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB384RmnlKMpzHxJ5GCjE_ksgyjuqckadzx_amIYDNtprX2Cc84NYsSHlOVhfNkvMADMwpoT7EB_xo1nyjTKKZBtDWocm92ewSvlYyjeIumvJT9fJjV-XxqZqYnKgsLedRVa7QvO2g9Rx3d8GXZkrS_b7VCwA_qYM4eJNcrxnr-pUrtDZ0YCZyHjnqJfp_a_AdD7zW_kVYqiMHOAb8FEX774sxskY3EFqCPG0wko0Y9c_7yxsnbHadOsHsBzKj6NqbFvRldcKLAZnWO',
            availability: 'Next Slot: Tomorrow',
            availabilityTag: 'next-slot',
            rating: 5.0,
            reviews: 42,
            specialties: ['Family Therapy', 'Relationships', 'Conflict Resolution'],
            description: 'Helping couples and families navigate complex dynamics. My approach combines systemic therapy with practical communication tools.',
            languages: ['English', 'Mandarin'],
            experience: '8 Years Exp.',
            price: 100,
            duration: 50,
            isFavorite: false
        },
        {
            id: 3,
            name: 'Priya Sharma',
            title: 'Psychotherapist',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAdCcigu6u64UzO3R9ZmLYRwy6UDEOYv0ZhRwrIUlBAP8ogtVH3Wq5DXAkJnJGMs-CI2G1ZJD1sNMUu5mVi3hoJsz17iHBHKl3GP6806u5TjIEtavHVKawftRVNNVSAssOkUpAVguEQBfZItMLqaZv76R1osA_qw6Bb_by1s91TxqxYXSCuyvRKWsqwJDb8ii3v3SoLrXYxUA3fHonkGr4Usj8kDWjM__Yxlv321l0knF5dO4XcVLQlHHrJIzgc-TXZcZLi8e9Jg0W',
            availability: 'Available Next Week',
            availabilityTag: 'available-week',
            rating: 4.7,
            reviews: 56,
            specialties: ['Stress Management', 'Mindfulness', 'Holistic Therapy'],
            description: 'Integrating traditional psychotherapy with mindfulness practices. I focus on helping clients manage stress and find balance in their daily lives.',
            languages: ['English', 'Hindi'],
            experience: '5 Years Exp.',
            price: 90,
            duration: 50,
            isFavorite: false
        }
    ];

    specialties = [
        'Anxiety & Depression',
        'Trauma & PTSD',
        'Relationship Issues',
        'Family Therapy',
        'Addiction Counseling',
        'Grief & Loss',
        'Career Counseling',
        'Eating Disorders'
    ];

    languages = ['English', 'Spanish', 'Mandarin', 'Hindi', 'French', 'German'];

    availabilityOptions = ['Anytime', 'Available Today', 'Available This Week'];

    constructor(private router: Router) { }

    toggleFavorite(therapist: Therapist): void {
        therapist.isFavorite = !therapist.isFavorite;
    }

    viewProfile(therapistId: number): void {
        // TODO: Navigate to therapist profile page
        console.log('View profile for therapist:', therapistId);
    }

    bookSession(therapistId: number): void {
        // TODO: Navigate to booking page
        console.log('Book session for therapist:', therapistId);
    }

    resetFilters(): void {
        this.selectedSpecialty = 'Anxiety & Depression';
        this.selectedLanguage = 'English';
        this.selectedAvailability = 'Anytime';
        this.minPrice = 0;
        this.maxPrice = 500;
        this.searchQuery = '';
    }

    applyFilters(): void {
        // TODO: Implement filter logic
        console.log('Applying filters...');
    }

    get filteredTherapists(): Therapist[] {
        return this.therapists; // TODO: Implement actual filtering logic
    }
}
