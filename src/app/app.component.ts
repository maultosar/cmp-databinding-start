import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerCreated(server: { serverName: string; serverContent: string }) {
    this.serverElements.push({name: server.serverName, content: server.serverContent, type: 'server'});
  }

  onServerBlueCreated(server: { serverName: string; serverContent: string }) {
    this.serverElements.push({name: server.serverName, content: server.serverContent, type: 'blueprint'});
  }
}
