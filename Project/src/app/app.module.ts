import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatGPTComponent } from './chat-gpt/chat-gpt.component';
import { BardComponent } from './bard/bard.component';
import { BingComponent } from './bing/bing.component';
import { GeminiComponent } from './gemini/gemini.component';
import { OpenChatComponent } from './open-chat/open-chat.component';
import { LlamaComponent } from './llama/llama.component';
import { MixtralComponent } from './mixtral/mixtral.component';
import { DatePipe } from '@angular/common';
import { DalleComponent } from './dalle/dalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatGPTComponent,
    BardComponent,
    BingComponent,
    GeminiComponent,
    OpenChatComponent,
    LlamaComponent,
    MixtralComponent,
    DalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
