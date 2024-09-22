export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}


import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="characters-form-container">
     <form class="character-form" #characterCreationForm = "ngForm" (ngSubmit)="onSubmit(characterCreationForm)" (reset)="resetForm()">
      <h1>Create Your Own Character!</h1>

      <fieldset>
       <legend>My Character</legend>
       <label for="name">Name</label>
       <input type="text" id="name" name="name" class="name-input" [(ngModel)]="name" ngModel>


       <div>
        <label for="gender">Gender</label>
        <select name="gender" id="gender" [(ngModel)]="gender" ngModel>
         <option value="male">Male</option>
         <option value="female">Female</option>
         <option value="other">Other</option>
        </select>
       </div>

       <div>
        <label for="class">Class</label>
        <select name="class" id="class" [(ngModel)]="class" ngModel>
         <option value="warrior">Warrior</option>
         <option value="mage">Mage</option>
         <option value="rogue">Rogue</option>
        </select>
       </div>

       <input type="submit" value="Create Character"/>
      </fieldset>
     </form>

     <div class="created-characters">
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
      }
     </div>
    </div>

  `,
  styles: [
    `
    .characters-form-container {
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }

    .character-form {
      flex: 1;
      margin-right: 20px;
    }

    .created-characters {
      flex: 1;
    }

    fieldset {
      margin-bottom: 20px;
    }

    label, select, name-input {
      display: inline-block;
      margin-bottom: 5px;
    }

    select {
      width: 100%;
    }

    .name-input {
      width: 100px;
    }

    input[type="submit"] {
      float: right;
    }

    .create-characters li {
      margin-bottom: 10px;
      padding: 5px;
    }
    `
  ]
})
export class CreateCharacterComponent {
 characters: Character[];
 characterId: number;
 name: string = '';
 gender: string = '';
 class: string = '';


  constructor() {
   this.characters = [];
   this.characterId = 0;
   this.name = '';
   this.gender = '';
   this.class = '';
  }



  onSubmit(form: any) {
   console.log('Form value:', form.value);

   if(form.valid) {

     this.characterId = Math.floor(Math.random() * 1000) +1;

     const newCharacter = {
       id: this.characterId,
       name: form.value.name,
       gender: form.value.gender,
       class: form.value.class
     };

     this.characters.push(newCharacter);
     this.resetForm();
   } else {
     console.error('Character not created')
   }
 }
 resetForm () {
  this.name = " ";
  this.gender = " ";
  this.class = " ";
 }
}
