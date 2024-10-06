import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if(factions) {
      <div class="faction-container">
       <h1>Name: {{ factions.name }}</h1>
       <p>Description: {{ factions.description }} </p>
      </div>
    } @else {
      <div class="faction-container">
       <h1> {{ noFactionMessage }} </h1>
      </div>
    }
  `,
  styles: `

  .faction-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  `
})
export class CharacterFactionComponent {
factions: any = null;
noFactionMessage: string ='';

constructor(private http: HttpClient) {

  this.http.get(`http://localhost:3000/api/character-factions`).subscribe({
    next: (res) => {
      console.log(res);
      this.factions = res;
    },

    error: (err) => {
      console.error('Error fetching factions', err);
      if(err.error === 'Faction not found') {
        this.noFactionMessage = 'No character factions found.';
      } else {
        this.noFactionMessage = 'No character factions found.';
      }
    }
  });
}
}
