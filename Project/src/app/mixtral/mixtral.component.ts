import { Component, Input } from '@angular/core';
import { GptService } from '../chat-gpt/gpt.service';

@Component({
  selector: 'app-mixtral',
  templateUrl: './mixtral.component.html',
  styleUrls: ['./mixtral.component.css']
})
export class MixtralComponent {
  @Input()
  prompt!: string;

  solution!: any;
  
  next: boolean = false;
  constructor(private service: GptService) { }

  ngOnInit(): void {
    this.postdata()
  }

  postdata() {
    this.service.postdataMixtral(this.prompt).subscribe(res => {
      this.solution = res
      this.solution = this.solution.message      
      this.next = true;
                 
    }, err => {
      console.error(err);
      this.solution = err.message;
    })
  }
}
