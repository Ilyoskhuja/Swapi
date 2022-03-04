import {Component, OnDestroy, OnInit} from '@angular/core';
import { CharactersService} from '../characters.service';
// import {PageEvent} from '@angular/material';
import {Subscription} from 'rxjs';
import { Character } from '../models/character';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit, OnDestroy {
  characters: Character[];
  charactersCount: number;
  subscription: Subscription;

  constructor(public charactersService: CharactersService) {
  }

  ngOnInit() {
    this.subscription = this.charactersService.getCharactersList().subscribe(data => {
      // this.characters = data.results;
      // this.charactersCount = data.count;
    });
  }

  pageData(event: PageEvent) {
    this.subscription = this.charactersService.getCharactersList(event.pageIndex + 1).subscribe(data => {
      // console.log("data:",data);
      
      // this.characters = data;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
