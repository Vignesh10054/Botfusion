import { Component, Input } from '@angular/core';
import { GptService } from '../chat-gpt/gpt.service';

@Component({
  selector: 'app-open-chat',
  templateUrl: './open-chat.component.html',
  styleUrls: ['./open-chat.component.css']
})
export class OpenChatComponent {

  @Input()
  prompt!: string;

  solution!: any;
  
  next: boolean = false;
  constructor(private service: GptService) { }

  ngOnInit(): void {
    this.postdata()
  }

  postdata() {
    this.service.postdataOpenChat(this.prompt).subscribe(res => {
      this.solution = res
      this.solution = this.solution.message      
      this.next = true;
                 
    }, err => {
      console.error(err);
      this.solution = err.message;
    })
  }
}
