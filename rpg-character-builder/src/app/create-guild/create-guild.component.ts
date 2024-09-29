export interface Guild {
  guildName: string;
  description: string;
  type: string;
  acceptTerms: boolean;
  notificationPref: string;
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GuildListComponent } from '../guild-list/guild-list.component';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [FormsModule, CommonModule, GuildListComponent],
  template: `
   <div class="create-guild-container">
    <div class="form-container">
     <form class="guild-form" #createGuildForm="ngForm" (ngSubmit)="createGuild();">
      <h1>Create your own guild!</h1>

      <fieldset>
       <legend>New Guild</legend>

       <div class="guild-options">
        <label for="guildName">Guild Name</label>
        <input type="text" id="guildName" name="guildName" class="guildName" [(ngModel)]="guildName" required>

        <label for="description">Describe this guild:</label>
        <textarea id="description" name="description" rows="5" [(ngModel)]="description" required></textarea>

        <label for="type">Select Type</label>
        <select id="type" name="type" [(ngModel)]="type" required>
         <option value="competitive">Competitive</option>
         <option value="casual">Casual</option>
         <option value="social">Social</option>
         <option value="educational">Educational</option>
        </select>
       </div>

        <label for="acceptTerms">Check to accept terms</label>
        <input type="checkbox" id="acceptTerms" name="acceptTerms" [(ngModel)]="acceptTerms" required>

        <div>
         <label>
          <input type="radio" id="notifPref" name="notifPref" value="email" [(ngModel)]="notifPref" required/>Email
         </label>
         <label>
          <input type="radio" id="notifPref" name="notifPref" value="sms" [(ngModel)]="notifPref" required/>SMS
         </label>
         <label>
          <input type="radio" id="notifPref" name="notifPref" value="in-app" [(ngModel)]="notifPref" required/>In-App
         </label>
        </div>


       <button type="submit" [disabled]="!createGuildForm.valid">Create Guild</button>
      </fieldset>
     </form>
    </div>

    <div class="guild-container">
      <app-guild-list [guilds]="guilds"></app-guild-list>
    </div>
   </div>


  `,
  styles: `

  .create-guild-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;
  }

  .form-container {
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
  }

  .guild-form {
    display: flex;
    flex-direction: column;
  }

  fieldset {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  legend {
    padding: 5px;
  }

  label {
    font-weight: bold;
    display: inline-block;
    margin: 10px;
  }

  input[type="checkbox"], input[type="radio"] {
    margin-right: 10px;
  }

  button[type="submit"] {
    padding: 10px 20px;
  }

  .guild-options {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .guild-container {
    width: 100%;
    padding: 20px;
  }

  .guild-container ul {
    list-style: none;
  }


  `
})
export class CreateGuildComponent {
guilds: Guild[] = [];

  guildName: string='';
  description: string='';
  type: string='';
  acceptTerms: boolean=false;
  notifPref: string='';

@Output() guildUpdated = new EventEmitter<Guild>();


createGuild() {
  if (this.guildName && this.description && this.type && this.acceptTerms && this.notifPref) {
    const newGuild: Guild = ({
      guildName: this.guildName,
      description: this.description,
      type: this.type,
      acceptTerms: this.acceptTerms,
      notificationPref: this.notifPref
    });

    this.guilds.push(newGuild);

    this.guildUpdated.emit(newGuild)
    this.resetForm();
  }
}
 resetForm() {
  this.guildName = '';
  this.description = '';
  this.type = '';
  this.acceptTerms = false;
  this.notifPref = '';
 }

}
