import { Component, OnInit } from '@angular/core';

@Component({
  // Selecting Using Element
  selector: 'app-servers',
  // Selecting Using Attributes
  // selector: '[app-servers]',
  // Selecting Using Class
  // selector: '.app-servers',

  templateUrl: './servers.component.html',
  // `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Was Created';
  serverName = '';
  serverCreated = false;
  servers = ['testserver', 'testserver1'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server Was Created With Name: ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    // this.serverName = event.target.value; event: any
    this.serverName = (<HTMLInputElement>event.target).value; // event: Event
  }
}
