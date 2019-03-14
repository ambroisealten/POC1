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
    this.deviceName = 'ddddddddddddddcc';
    console.log(this.saveAppareilsToServer());
 }

  saveAppareilsToServer() {
    this.httpClient
      .get('http://localhost:8080/cc?nom=' + this.deviceName)
      .subscribe(
        (response) => {
          console.log('cc' + response);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}

  ngOnInit() {
  }

  getStatus() {
    return this.deviceStatus;
  }

}
