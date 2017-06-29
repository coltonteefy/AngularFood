import { Component, OnInit } from '@angular/core';
import {trigger, state, style,animate,transition} from "@angular/animations";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({height: '50px'})),
      state('out', style({height: '0px'})),
      transition('in => out', (animate('400ms ease-in-out'))),
      transition('out => in', (animate('400ms ease-in-out')))
      // transition('* => void', [
      //   style({height: '*'}),
      //   animate(250, style({height: 0}))]
      // )
    ])
  ]
})
export class HeaderComponent implements OnInit {

  menuState: string = 'out';
  private LOGO = './assets/upsLogo.gif';
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    console.log(this.menuState);
  }

}
