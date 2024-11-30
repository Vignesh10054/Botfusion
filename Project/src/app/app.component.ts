import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Project';
  prompt!: string;
  isSubmitted: boolean = false;
  promptForm!: FormGroup 
  formattedDate !: any;

  ngOnInit(): void {
    const currentDate = new Date();
    this.formattedDate = this.datePipe.transform(currentDate);
    this.isSubmitted = false
    this.promptForm = this.fb.group({
      promptField: ''
    })
  }

  constructor(private fb: FormBuilder, private datePipe: DatePipe) { }

  call() { this.isSubmitted = !this.isSubmitted }

  Reset(){

    this.isSubmitted = !this.isSubmitted  
    this.promptForm.controls['promptField'].reset()

  }


}
