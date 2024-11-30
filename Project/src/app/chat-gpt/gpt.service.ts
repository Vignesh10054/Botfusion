import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GptService {

  constructor(private http: HttpClient) { }

  // getdata() {
  //   return this.http.get('http://localhost:3000/');
  // }

  postdataGPT(message: any) {
    return this.http.post('http://localhost:3000/chatGPT', message);
  }

  postdataBard(message: any) {
    return this.http.post('http://localhost:3000/bard', message);
  }

  postdataBing(message: any) {
    return this.http.post('http://localhost:3000/bing', message);
  }

  postdataOpenChat(message: any) {
    return this.http.post('http://localhost:3000/openChat', message);
  }

  postdataGemini(message: any) {
    return this.http.post('http://localhost:3000/gemini', message);
  }

  // postdataLlama(message: any) {
  //   return this.http.post('http://localhost:3000/llama', message);
  // }
  postdataLlama(message: any): Observable<any> {
    return this.http.post('http://localhost:3000/llama', message);
  }

  postdataMixtral(message: any) {
    return this.http.post('http://localhost:3000/mixtral', message);
  }

  postdataDalle(message: any) {
    return this.http.post('http://localhost:3000/dalle', message);
  }

}
