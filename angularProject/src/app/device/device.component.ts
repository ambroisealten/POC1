import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatus: string;

  constructor(private httpClient: HttpClient) {
    this.saveAppareilsToServer();
 }

  saveAppareilsToServer() {
    this.httpClient
      .get('http://localhost:8080/cc?nom=' + 'hhhh')
      .forEach(next =>
        this.deviceName = (next as JSON)["nom"]);
  }

  ngOnInit() {
  }

  getStatus() {
    return this.deviceStatus;
  }

}
