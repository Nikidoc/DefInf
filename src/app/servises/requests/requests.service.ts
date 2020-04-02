import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private address : string = "http://127.0.0.1:5050/";
  constructor(private http: HttpClient) { }

  public get(url: string) {
    return this.http.get(url);
  }

  public post(method: string, file: File, message: string = null) {
    // let json_message = JSON.stringify({"message":message});
    let formData: FormData;
    // @ts-ignore
    formData = new FormData();
    formData.append('file', file, file.name);
    if (message) {
      formData.append('message', message);
    }
    return this.http.post(this.address + method, formData);
  }

  public reg(file : File){
    return this.post("reg", file);
  }

  public crypt(message : string, file : File){
    return this.post("crypt", file, message);
  }

  public decrypt(message : string, file : File){
    return this.post("decrypt", file, message);
  }

  public test(){
    return this.http.get(this.address + "test");
  }

}
