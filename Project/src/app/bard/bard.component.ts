import { Component, Input, OnInit } from '@angular/core';
import { GptService } from '../chat-gpt/gpt.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-bard',
  templateUrl: './bard.component.html',
  styleUrls: ['./bard.component.css']
})
export class BardComponent implements OnInit {

  @Input()
  prompt!: string;

  solution!: any;
  
  next: boolean = false;
  constructor(private service: GptService) { }

  ngOnInit(): void {
    this.postdata()
  }

  postdata() {
    this.service.postdataBard(this.prompt).subscribe(res => {
      this.solution = res
      this.solution = this.solution.message      
      this.next = true;
                 
    }, err => {
      console.error(err);
      this.solution = err.message;
    })
  }

 }
