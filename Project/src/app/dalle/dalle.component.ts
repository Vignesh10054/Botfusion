import { Component, Input } from '@angular/core';
import { GptService } from '../chat-gpt/gpt.service';

@Component({
  selector: 'app-dalle',
  templateUrl: './dalle.component.html',
  styleUrls: ['./dalle.component.css']
})
export class DalleComponent {
  @Input()
  prompt!: string;

  solution!: any;
  
  next: boolean = false;
  constructor(private service: GptService) { }

  // ngOnInit(): void {
  //   this.postdata()
  // }

  // postdata() {
  //   this.service.postdataDalle(this.prompt).subscribe(res => {
  //     this.solution = res
  //     this.solution = this.solution.imageUrl  
  //     this.next = true;
                 
  //   }, err => {
  //     console.error(err);
  //     this.solution = err.message;
  //   })
  // }
}
