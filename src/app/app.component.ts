import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-start py-12">
    <h1 class="text-4xl font-bold text-purple-700 mb-8 drop-shadow-lg">
      Dynamic Card Manager
    </h1>
    <app-card-list></app-card-list>
  </div>
  `
})
export class AppComponent { }
