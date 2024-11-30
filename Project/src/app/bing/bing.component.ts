import { Component, Input } from '@angular/core';
import { GptService } from '../chat-gpt/gpt.service';

@Component({
  selector: 'app-bing',
  templateUrl: './bing.component.html',
  styleUrls: ['./bing.component.css']
})
export class BingComponent {

  @Input()
  prompt!: string;

  solution: any;
  next: boolean = false;
  constructor(private service: GptService) { }

  ngOnInit(): void {
    this.postdata()
  }

  postdata() {
    this.service.postdataBing(this.prompt).subscribe(res => {
      this.solution = res  
      this.solution = this.solution.reply
      this.next = true;
                 
    }, err => {
      console.error(err);
      this.solution = err.message;
    })
  }
}
