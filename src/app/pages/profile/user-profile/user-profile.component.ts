import { PrivacySectionComponent } from './components/privacy-section/privacy-section.component';
import { BasicDetailsSectionComponent } from './components/basic-details-section/basic-details-section.component';
import { YourStorySectionComponent } from './components/your-story-section/your-story-section.component';
import { StickyFooterComponent } from './components/sticky-footer/sticky-footer.component';

const INITIAL_PROFILE: UserProfile = {
  fullName: "Sarah Jenkins",
  email: "sarah.jenkins@example.com",
  dob: "1995-09-12",
  gender: "female",
  country: "us",
  city: "San Francisco",
  anonymousMode: true,
  nickname: "Serenity_Seeker_99",
  story: "I've been feeling overwhelmed with work lately and struggling to find balance...",
  tags: ["Stress", "Anxiety", "Work-Life Balance"],
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBXsv6xnK8Im8iDYmlRc-gPQV2YiVeKHbutt8NkTBU1LhygFZh6fqEEtwobUR8rXhxtWs_FOjnxHA3b_XW6OcWeHbAG_BYS6K4IvLUhIpTHa89-MwuTLph06QdSpkUJHqFgtrhs_F8EB8cm5wQ4wi3kP3y-xAcNzdMAQLa-3nn_d2Q2NqkOX0-XkJ9yVOvZVjeoUl_45w5rN0mxpzowQMZO7kMjX9v1urS-xJ2Lw_rTi6w0a-RahumLxOAEp0UtU66ovewuaU46wJt",
  membershipDate: "September 2023",
  completionRate: 80
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ProfileOverviewComponent,
    PrivacySectionComponent,
    BasicDetailsSectionComponent,
    YourStorySectionComponent,
    StickyFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  profile = signal<UserProfile>({ ...INITIAL_PROFILE });
  isSaving = signal(false);
  lastSaved = signal("Today at 10:42 AM");

  updateProfile(updates: Partial<UserProfile>) {
    this.profile.update(current => ({ ...current, ...updates }));
  }

  handleSave() {
    this.isSaving.set(true);
    setTimeout(() => {
      this.isSaving.set(false);
      const now = new Date();
      this.lastSaved.set(`Today at ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`);
      alert("Changes saved successfully!");
    }, 1000);
  }

  handleCancel() {
    if (confirm("Are you sure you want to discard changes?")) {
      this.profile.set({ ...INITIAL_PROFILE });
    }
  }
}