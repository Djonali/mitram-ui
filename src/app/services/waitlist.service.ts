import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

export interface WaitlistFormData {
  name: string;
  email: string;
  phone?: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    name: string;
    email: string;
    status: string;
    createdAt: string;
  };
  errors?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class WaitlistService {
  private apiUrl = `${environment.apiUrl}/waitlist`;

  constructor(private http: HttpClient) {}

  addToWaitlist(formData: WaitlistFormData): Observable<WaitlistResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<WaitlistResponse>(this.apiUrl, formData, { headers });
  }
}
