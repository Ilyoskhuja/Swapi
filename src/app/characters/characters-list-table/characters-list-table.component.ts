import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { CharactersService} from '../characters.service';
import { Character } from '../models/character';

@Component({
  selector: 'app-characters-list-table',
  templateUrl: './characters-list-table.component.html',
  styleUrls: ['./characters-list-table.component.scss']
})
export class CharactersListTableComponent {

  @Input() characters: Character[];
  tableColumns = ['name', 'birth_year', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color'];

  constructor(public charactersService: CharactersService,
    private router: Router) {
    // console.log("CharactersListTableComponent");
    
  }

  showDetails(character: Character) {
    // console.log("-00000---character----00000---:", character);
    
    this.charactersService.selectedCharacter = character;
    // console.log(" this.charactersService.selectedCharacter :", this.charactersService.selectedCharacter );
    
    this.router.navigate(['/characters', character.id]);
  }

}
