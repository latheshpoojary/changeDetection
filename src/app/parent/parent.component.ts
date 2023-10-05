import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  counter = 1;
  d = 'Fri Oct 27 2023 00:00:00 GMT+0530 (India Standard Time) ';

  obj = {
    key: 'val',
    key2: 'val2',
    key3:'val3'
  }

  get Obj1(){
    return Object.entries(this.obj);
  }

  OnClick() {
    this.counter++;
    const p = JSON.parse(JSON.stringify(this.d));
    console.log(p);
    
  }

  
}
