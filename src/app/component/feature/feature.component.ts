import { Component, OnInit, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [
    MatButtonModule

  ],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent  {
  

  count = signal(0);  //signals-----------


  //writable signals using update
   
  increment(){
    this.count.update(val => val+1);
  }
   //writable signals using update
   setvalue(){
    this.count.set(6);
  }
 
}
