import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myAngularxQrCode: string = '';
  public qrCodeDownloadLink: SafeUrl = "";
  public qrCodeSize: string = "large";
  constructor () {}
  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
  title = 'qr-generator';
  getQrCodeScale(): number {
    switch (this.qrCodeSize) {
      case 'small':
        return 100;
      case 'medium':
        return 200;
      case 'large':
        return 400;
      default:
        return 400;
    }
  }
  
}
