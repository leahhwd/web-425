import { Component, Input } from '@angular/core';
import { Guild } from '../create-guild/create-guild.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Created Guilds:</h1>
  @if(guilds.length > 0) {
   <ul>
    @for(guilds of guilds; track guilds) {
     <li>
      <strong>Guild Name:</strong> {{ guilds.guildName }}
      <strong>Description:</strong> {{ guilds.description }}
      <strong>Guild Type:</strong> {{ guilds.type }}
     </li>
    }
   </ul>
  } @else {
     <p>No created guilds</p>
    }
  `,
  styles: `

  li {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid;
    border-radius: 5px;
  }
  `
})
export class GuildListComponent {

  @Input() guilds!: Guild[];
}
