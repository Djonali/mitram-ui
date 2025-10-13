import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Activity = {
    icon: 'journal' | 'group' | 'session';
    text: string;
    timeAgo: string;
};

@Component({
    selector: 'app-recent-activity',
    standalone: true,
    templateUrl: './recent-activity.component.html',
    styles: [],
    imports: [CommonModule]
})
export class RecentActivityComponent {
    activities: Activity[] = [
        { icon: 'journal', text: 'Created "Morning Reflection" journal', timeAgo: '2 hours ago' },
        { icon: 'group', text: 'Joined "Anxiety Support" group', timeAgo: '1 day ago' },
        { icon: 'session', text: 'Completed session with Dr. Sarah', timeAgo: '3 days ago' }
    ];
}


