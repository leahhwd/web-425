import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <div class="wrapper">
   <header class="banner">
    <img src="/assets/cover.jpg" alt="website banner for rpg character creation" class="banner img">
   </header>

   <div class="sign-in-container">
    @if (email) {
      <p>Hello, {{ email }}</p>
      <button (click)="signout()">Sign Out</button>
    } @else {
      <a routerLink="/signin" class="sign-in-link">Sign In</a>
    }
   </div>

   <main class="main content">

    <nav class="navbar">
     <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/players">Players</a></li>
      <li><a routerLink="/create-character">Create Character</a></li>
      <li><a routerLink="/create-guild">Create Guild</a></li>
      <li><a routerLink="/character-faction">Character Faction</a></li>
     </ul>
    </nav>

    <section class="content">
     <router-outlet/>
    </section>

   </main>

   <footer class="footer">
     <a routerLink="/">Home</a> |
     <a routerLink="/players">Players</a> |
     <a routerLink="/create-character">Create Character</a> |
     <a routerLink="/create-guild">Create Guild</a> |
     <a routerLink="/character-faction">Character Faction</a>

     <p>&copy; 2024 RPG Character Builder</p>
    </footer>
   </div>


  `,
  styles: [
    `
    .sign-in-container {
      text-align: right;
      padding-right: 30px;
      margin-top: 20px;
    }

    .sign-in-link {
      color: #6B8282;
      text-decoration: none;
      font-family: 'Oswald';
      font-size: 20px;
    }
    `
  ]
})
export class AppComponent {
  email?: string;

  constructor(private authService: AuthService, private cookieService: CookieService){

  }

  ngOnInit() {
    this.authService.getAuthState().subscribe((isAuth) => {
      if(isAuth) {
        this.email = this.cookieService.get('session_user');
      }
    });
  }

  signout() {
    this.authService.signout();
  }

}
