export interface characters {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [ CommonModule ],
  template: `
   <div>
    <h1 class="title">Characters:</h1>

    <ul class="players-container">
    @for (item of players; track item) {
      <li class="player-options">
       <div class="character-info">
        <h2> {{ item.name }} </h2>
        <h3> {{ item.gender }} </h3>
        <h3> {{ item.class }} </h3>
        <h3> {{ item.faction }} </h3>
        <h3> {{ item.startingLocation }} </h3>
        <p> {{ item.funFact }} </p>
       </div>
      </li>
    }
    </ul>
   </div>
  `,
  styles: [
    `
    .players-container {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 10px;
      justify-content: center;
    }

    .player-options {
     flex: 0 1 calc(33.33% - 20px);
     margin: 10px;
    }

    .character-info {
      padding: 20px;
    }

    .title {
      text-align: center;
    }
    `
  ]
})
export class PlayersComponent {

  players: characters[];

  constructor() {
    this.players = [
      {
        "name": "Benedict Clark",
        "gender": "male",
        "class": "Warrior",
        "faction": "Summit Warden",
        "startingLocation": "The City of White Skies",
        "funFact": "Benedict is an only child"
      },
      {
        "name": "Maela Butterfield",
        "gender": "Other",
        "class": "Mage",
        "faction": "The Moss Syndicate",
        "startingLocation": "Depthome, City of Greens",
        "funFact": "Maela is an avid beekeeper, and lost custody of their kids 2 years ago"
      },
      {
        "name": "Zinnia Vardeen",
        "gender": "female",
        "class": "Warrior",
        "faction": "Reefwarden",
        "startingLocation": "The Cobalt Sea",
        "funFact": "Zinnia Vardeen is ambidextrous"
      },
      {
        "name": "Combaleen Jonq",
        "gender": "other",
        "class": "Mage",
        "faction": "The Emerald Cartel",
        "startingLocation": "Green Lotus",
        "funFact": "Combaleen is a gold medal paralympian"
      },
      {
        "name": "Una HoneyComb",
        "gender": "male",
        "class": "Rogue",
        "faction": "The Convenant of Carnage",
        "startingLocation": "Vein of Salanta",
        "funFact": "Una hates his last name"
      },
      {
        "name": "Ignatious Field",
        "gender": "other",
        "class": "Rogue",
        "faction": "The Sunlight Harvesters",
        "startingLocation": "City of the Red Sky",
        "funFact": "Ignatious has really bad motion sickness"
      },
      {
        "name": "Ruddie Shadow",
        "gender": "female",
        "class": "Mage",
        "faction": "Sharknado Coalition",
        "startingLocation": "Bulzimar hills",
        "funFact": "Ruddie has five years of experience as a desk clerk for a high-end hotel chain"
      },
      {
        "name": "Knott Dodgerwood",
        "gender": "male",
        "class": "Warrior",
        "faction": "Cult of Tumbleweed",
        "startingLocation": "The Cowboys Stadium",
        "funFact": "Knott's family money comes from a theme park based in Buena Park, California"
      },
      {
        "name": "Chelise Hallowfeet",
        "gender": "female",
        "class": "Warrior",
        "faction": "Echoing Hannibals",
        "startingLocation": "City of Waste",
        "funFact": "Chelise can call mother deer by crying like an infant"
      },
      {
        "name": "Phaenderr QuickenHalt",
        "gender": "male",
        "class": "Rogue",
        "faction": "Mountains Embrace",
        "startingLocation": "Wyverns Nest",
        "funFact": "Due to past events, Phaenderr is seeking therapy"
      }
    ];
  }
}
