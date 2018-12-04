import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
// tslint:disable-next-line:max-line-length
recipes: Recipe[] = [new Recipe('Patate riso e cozze', 'lorem ipmus dsa dsa', 'http://cdn.cook.stbm.it/thumbnails/ricette/1/1624/hd750x421.jpg')
,
// tslint:disable-next-line:max-line-length
new Recipe('orecchiette con le cime di rapa', 'lorem ipmus dsa dsa', 'https://img2.tgcom24.mediaset.it/binary/ricetta/tgcom24/33.$plit/C_2_ricetta_1620_upiFoto.jpg')
,
new Recipe('bombette', 'lorem ipmus dsa dsa', 'http://www.passalorto.it/1014-large_default/spiedini-di-bombette.jpg')
];
constructor() { }

  ngOnInit() {
  }

}
