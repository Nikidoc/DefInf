import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../servises/requests/requests.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {

  public status: boolean;
  public loading: boolean;
  public message: string;
  public file:File;
  constructor(private request: RequestsService) { }

  ngOnInit() {

  }

  private reg(e:Event){
    this.loading = true;
    this.request.reg(this.file).subscribe(value => {
      if (value["status"] !== 0) {
            this.message = value["message"];
            this.status = false;
      } else {
            this.message = "Регистрация успешно завершена!";
            this.status = true;
      }
      console.log("Message from server: " + JSON.stringify(value));
      this.loading = false;
    });
  }


  private savePath(e:Event){
    // @ts-ignore
    this.file = e.target.files[0];
  }

}

