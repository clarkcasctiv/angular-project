import { Component, OnInit } from '@angular/core';

@Component({
  // Selecting Using Element
  selector: 'app-servers',
  // Selecting Using Attributes
  // selector: '[app-servers]',
  // Selecting Using Class
  // selector: '.app-servers',

  template: `
  <app-server></app-server>
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
