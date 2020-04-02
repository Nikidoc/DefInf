import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../servises/requests/requests.service';

@Component({
  selector: 'app-crypt',
  templateUrl: './crypt.component.html',
  styleUrls: ['./crypt.component.css']
})
export class CryptComponent implements OnInit {
  public text: string;
  public status: boolean;
  public loading: boolean;
  public message: string;
  public file:File;

  constructor(private request: RequestsService) { }

  ngOnInit() {
  }

  private crypt(e:Event){
    this.loading = true;
    this.request.crypt(this.text, this.file).subscribe(value => {
      if (value["status"] !== 0) {
        this.status = false;
      } else {
        this.status = true;
      }
      this.message = value["message"];
      this.loading = false;
      console.log("Message from server: " + JSON.stringify(value));
    });
    console.log(this.text);
  }

  private savePath(e:Event){
    // @ts-ignore
    this.file = e.target.files[0];
  }

}
