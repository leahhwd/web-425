import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <div class="wrapper">
   <header class="banner">
    <img src="/assets/cover.jpg" alt="website banner for rpg character creation" class="banner img">
   </header>

   <main class="main content">

    <nav class="navbar">
     <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a href="#">Create Characters</a></li>
      <li><a href="#">View Characters</a></li>
      <li><a href="#">About</a></li>
     </ul>
    </nav>

    <section class="content">
     <router-outlet/>
    </section>

   </main>

   <footer class="footer">
     <nav class="footer-nav">
      <a routerLink="/">Home</a> |
      <a href="#">Create Characters</a> |
      <a href="#">View Characters</a> |
      <a href="#">About</a> |
     </nav>
     <p>&copy; 2024 RPG Character Builder</p>
    </footer>
   </div>


  `,
  styles: [
    `


    `
  ]
})
export class AppComponent {

}
