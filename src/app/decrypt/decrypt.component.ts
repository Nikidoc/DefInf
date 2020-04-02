import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../servises/requests/requests.service';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.css']
})
export class DecryptComponent implements OnInit {

  public text: string;
  public status: boolean;
  public loading: boolean;
  public message: string;
  public file:File;

  constructor(private request: RequestsService) { }

  ngOnInit() {
  }

  private decrypt(e:Event){
    this.loading = true;
    this.request.decrypt(this.text, this.file).subscribe(value => {
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
