import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatus: string;
  @Input() indexOfDevice: number;
  @Input() id: number;

  constructor(private httpClient: HttpClient, private deviceService: DeviceService) {
    //this.saveAppareilsToServer();
 }

   getColor() {
       if(this.deviceStatus === 'on') {
         return 'green';
       } else if(this.deviceStatus === 'off') {
         return 'red';
       }
   }

  saveAppareilsToServer() {
    this.httpClient
      .get('http://localhost:8080/cc?nom=' + 'hhhh')
      .forEach(next =>
        console.log('cc ' + (next as JSON)["nom"]));
  }

  ngOnInit() {
  }

  getStatus() {
    return this.deviceStatus;
  }

  onSwitchOn() {
    this.deviceService.switchOnDevice(this.indexOfDevice);
  }

  onSwitchOff() {
    this.deviceService.switchOffDevice(this.indexOfDevice);
  }

}
