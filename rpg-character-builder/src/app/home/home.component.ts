import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
     <h1>RPG Character Builder</h1>
      <h2>Welcome to the ultimate RPG character builder!</h2>
       <p>Your epic journey begins! Are you a well-seasoned traveler, or are you completely new
       to the world of role-playing games? Here, all are welcome. Our character builder is
       designed to help you easily create unique, interesting, memorable characters of all
       types. Jump into a large selection of customizable options and traits.
       </p>
       <p>Our easy-to-navigate tools allow you to generate and build characters from scratch.
       Let your imagination and creativity run wild with endless races, classes, backgrounds,
       storylines, and skills options. Enrich you game-playing experience with detailed characters
       that reflect your individual style!
       </p>
       <p>No more forgetting details. Save characters to your library to reference at any point.
       Join the community and access helpful tutorials and guides that will help you master
       the amazing art of character creation and customization. Unleash your creativity!
       </p>

       <div class="images-container">
        <div class="images">
         <img src="/assets/42519.jpg" alt="Photo of weapons and tools"/>
        </div>
        <div class="images">
         <img src="/assets/fantasy-group-adventurers.jpg" alt="group of adventurers"/>
        </div>
        <div class="images">
         <img src="/assets/dice.jpg" alt="game play dice"/>
        </div>
       </div>
    </div>
  `,
  styles: [`
   .images-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;

   }

   .images {
    margin: 30px;
   }

   h1, h2 {
    text-align: center;
   }



  `]
})
export class HomeComponent {

}
