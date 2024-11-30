import { Component, Input } from '@angular/core';
import { GptService } from '../chat-gpt/gpt.service';

@Component({
  selector: 'app-gemini',
  templateUrl: './gemini.component.html',
  styleUrls: ['./gemini.component.css']
})
export class GeminiComponent {

  @Input()
  prompt!: string;

  solution!: any;
  
  next: boolean = false;
  constructor(private service: GptService) { }

  ngOnInit(): void {
    this.postdata()
  }

  postdata() {
    this.service.postdataGemini(this.prompt).subscribe(res => {
      this.solution = res
      this.solution = this.solution.message      
      this.next = true;
                 
    }, err => {
      console.error(err);
      this.solution = err.message;
    })
  }

}
