import { Component } from '@angular/core';

@Component({
    selector: 'app-profile',
    standalone: true,
    template: `
    <div class="p-6 pb-24 space-y-4">
      <h1 class="text-2xl text-slate-800">Profile</h1>
      <div class="border rounded p-4">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 rounded-full bg-slate-200"></div>
          <div>
            <div class="text-slate-800">You</div>
            <div class="text-slate-500 text-sm">example.com</div>
          </div>
        </div>
        <button class="text-sm px-4 py-2 border rounded">Edit</button>
      </div>
    </div>
  `,
    styles: []
})
export class ProfileComponent { }

