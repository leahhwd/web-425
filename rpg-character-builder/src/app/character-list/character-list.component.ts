import { Component, Input } from '@angular/core';
import { Character } from '../create-character/create-character.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [ CommonModule ],
  template: `
  <h1>Characters:</h1>
  @if(characters.length > 0){
   <ul>
    @for(characters of characters; track characters){
     <li>
      <strong>Name: </strong> {{ characters.name }}
      <strong>Gender: </strong> {{ characters.gender }}
      <strong>Class: </strong> {{ characters.class }}
     </li>
    }
   </ul>
  } @else {
    <p>No characters created</p>
  }
  `,
  styles: `
  li {
    margin-bottom: 10px;
    padding: 5px;
  }
  `
})
export class CharacterListComponent {
@Input() characters!: Character[];
}
