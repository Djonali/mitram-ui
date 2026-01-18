import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../../../environment';

interface CommunityPost {
  id: number;
  author: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

interface CommunityMember {
  id: number;
  name: string;
  avatar: string;
  role: string;
}

@Component({
  selector: 'app-community-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.scss']
})
export class CommunityDetailComponent implements OnInit {
  communityId: number | null = null;
  activeTab: 'posts' | 'members' | 'about' = 'posts';
  isMember: boolean = false;

  community = {
    id: 1,
    name: 'ADHD Power Circle',
    category: 'Support Group',
    members: '1.2k',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEykk2q2MLkwtTdvNUqNRL2hrsmNGVY8qptijobdoRkamWgLv78jZrruU6yH6usFjtYlCz3dUid1uxOeaqgy9RNYByp42GE4opSmy4Sfvta3TyZp137nxxply3lGX1Yna0s0e6sU4g73UO0lBGCO0ua3Z-KUUlgc0M4HTVT09wI8tMEnKSNk52cQluOfXl3AsqAjRgt-k0HHsD--Rbd7X-cVCef5jKffRvq9II5zP59JG8MiH6FmWE_bepGeK6SDEX1ijABqAhgR4c',
    description: 'A safe space for adults with ADHD to share strategies, celebrate small wins, and navigate daily challenges together.',
    fullDescription: 'Welcome to ADHD Power Circle! This is a supportive community where adults with ADHD can connect, share experiences, and learn from each other. We focus on practical strategies, celebrate achievements (no matter how small), and provide a judgment-free space for discussing daily challenges.',
    rules: [
      'Be respectful and kind to all members',
      'Maintain confidentiality - what\'s shared here stays here',
      'No medical advice - share experiences, not prescriptions',
      'Celebrate wins, big and small',
      'Report any inappropriate behavior'
    ],
    createdDate: 'January 2022',
    location: 'Online',
    language: 'English'
  };

  posts: CommunityPost[] = [
    {
      id: 1,
      author: 'Sarah Johnson',
      authorAvatar: 'https://i.pravatar.cc/100?u=1',
      content: 'Just wanted to share a small win today - I managed to complete my morning routine without getting distracted! The pomodoro technique really helped. Anyone else find this useful?',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      author: 'Michael Brown',
      authorAvatar: 'https://i.pravatar.cc/100?u=2',
      content: 'Struggling with time blindness today. Does anyone have tips for staying aware of time passing?',
      timestamp: '5 hours ago',
      likes: 18,
      comments: 12
    },
    {
      id: 3,
      author: 'Jessica Wong',
      authorAvatar: 'https://i.pravatar.cc/100?u=3',
      content: 'Celebrating 30 days of consistent medication! It\'s been a journey but feeling so much better. Remember, progress isn\'t always linear 💪',
      timestamp: '1 day ago',
      likes: 45,
      comments: 15
    }
  ];

  members: CommunityMember[] = [
    { id: 1, name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/100?u=1', role: 'Member' },
    { id: 2, name: 'Michael Brown', avatar: 'https://i.pravatar.cc/100?u=2', role: 'Member' },
    { id: 3, name: 'Jessica Wong', avatar: 'https://i.pravatar.cc/100?u=3', role: 'Moderator' },
    { id: 4, name: 'Alex Chen', avatar: 'https://i.pravatar.cc/100?u=4', role: 'Member' },
    { id: 5, name: 'Emily Davis', avatar: 'https://i.pravatar.cc/100?u=5', role: 'Member' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.communityId = +id;
        this.loadCommunityDetails();
      }
    });
  }

  loadCommunityDetails(): void {
    // TODO: Load community details from API
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();

    // Example API call
    // this.http.get(`${API_URL}/api/community/${this.communityId}`, { headers })
    //   .subscribe({
    //     next: (data) => {
    //       this.community = data;
    //     },
    //     error: (err) => {
    //       console.error('Failed to load community', err);
    //     }
    //   });
  }

  setActiveTab(tab: 'posts' | 'members' | 'about'): void {
    this.activeTab = tab;
  }

  joinCommunity(): void {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();

    this.http
      .post(`${API_URL}/api/community/${this.communityId}/join`, {}, { headers })
      .subscribe({
        next: () => {
          this.isMember = true;
          console.log('Joined community successfully');
        },
        error: (err) => {
          console.error('Failed to join community', err);
        }
      });
  }

  leaveCommunity(): void {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();

    this.http
      .post(`${API_URL}/api/community/${this.communityId}/leave`, {}, { headers })
      .subscribe({
        next: () => {
          this.isMember = false;
          console.log('Left community successfully');
        },
        error: (err) => {
          console.error('Failed to leave community', err);
        }
      });
  }

  likePost(postId: number): void {
    // TODO: Implement like functionality
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.likes++;
    }
  }

  createPost(content: string): void {
    // TODO: Implement create post functionality
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();

    const payload = {
      communityId: this.communityId,
      content: content
    };

    this.http
      .post(`${API_URL}/api/community/posts`, payload, { headers })
      .subscribe({
        next: (res) => {
          console.log('Post created', res);
          // Reload posts
        },
        error: (err) => {
          console.error('Failed to create post', err);
        }
      });
  }
}
