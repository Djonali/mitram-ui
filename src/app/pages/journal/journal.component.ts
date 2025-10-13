import { Component } from '@angular/core';

@Component({
    selector: 'app-journal',
    standalone: true,
    template: `
    <div class="p-6 pb-24 space-y-4">
      <h1 class="text-2xl text-slate-800">Journal</h1>
      <textarea class="w-full border rounded p-3 min-h-40" placeholder="Write your thoughts..."></textarea>
      <div>
        <button class="text-sm px-4 py-2 border rounded">Save Entry</button>
      </div>
    </div>
  `,
    styles: []
})
export class JournalComponent { }

