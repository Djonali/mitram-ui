import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../../environment';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    @Output() close = new EventEmitter<void>();
    @Output() success = new EventEmitter<void>();

    isSubmitting = false;
    errorMessage: string | null = null;

    form = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    constructor(private fb: FormBuilder, private http: HttpClient) { }

    submit(): void {
        if (this.form.invalid || this.isSubmitting) {
            this.form.markAllAsTouched();
            return;
        }
        this.isSubmitting = true;
        this.errorMessage = null;
        let url = `${API_URL}/api/auth/register`;
        console.log("url", url);


        this.http.post<any>(url, this.form.value).subscribe({
            next: (res) => {
                if (res?.token) {
                    localStorage.setItem('token', res.token);
                }
                this.success.emit();
                this.close.emit();
                this.isSubmitting = false;
            },
            error: (err) => {
                this.errorMessage = err?.error?.message || 'Registration failed';
                console.log("error", err);
                this.isSubmitting = false;
            }
        });
    }
}


