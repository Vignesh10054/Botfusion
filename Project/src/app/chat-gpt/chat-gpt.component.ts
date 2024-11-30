import { Component, Input, OnInit } from '@angular/core';
import { GptService } from './gpt.service';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.css', '../app.component.css']
})
export class ChatGPTComponent implements OnInit {

  @Input()
  prompt!: string;

  solution!: any;
  next: boolean = false;

  constructor(private service: GptService) { }

  ngOnInit(): void {
    this.postData();
  }

  postData() {
    
    this.service.postdataGPT(this.prompt).subscribe(res => {
      this.solution = res;
      this.solution = this.solution.message;
      this.next = true;

    }, err => {
      console.error(err);
      this.solution = err.message;
    })

    

  }

  
}
