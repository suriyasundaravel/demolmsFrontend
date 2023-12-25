import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  // form: FormGroup;
  // Data: Array<any> = [
  //   { name: 'Pear', value: 'pear' },
  //   { name: 'Plum', value: 'plum' },
  //   { name: 'Kiwi', value: 'kiwi' },
  //   { name: 'Apple', value: 'apple' },
  //   { name: 'Lime', value: 'lime' }
  // ];
  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     checkArray: this.fb.array([], [Validators.required])
  //   })
  // }
  // onCheckboxChange(e) {
  //   const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   } else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((item: FormControl) => {
  //       if (item.value == e.target.value) {
  //         checkArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }
  // submitForm() {
  //   console.log(this.form.value)
  // }
  ngOnInit(){
      
  }

  toggoleEvent(event){
    console.log(event.detail.checked);
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
    }
    else{
      document.body.setAttribute('color-theme','light');
    }
    
  }

  toggoleEvent1(event){
    console.log("warning",event.detail.checked);
    if(event.detail.checked){
      document.body.setAttribute('color-theme','warning');
    }
    else{
      document.body.setAttribute('color-theme','light');
    }
    
  }

  toggoleEvent2(event){
    console.log("warning",event.detail.checked);
    if(event.detail.checked){
      document.body.setAttribute('color-theme','crystal');
    }
    else{
      document.body.setAttribute('color-theme','light');
    }
    
  }
  toggoleEvent3(event){
    console.log("warning",event.detail.checked);
    if(event.detail.checked){
      document.body.setAttribute('color-theme','lightTheme1');
    }
    else{
      document.body.setAttribute('color-theme','light');
    }
    
  }
  toggoleEvent4(event){
    console.log("warning",event.detail.checked);
    if(event.detail.checked){
      document.body.setAttribute('color-theme','lightTheme2');
    }
    else{
      document.body.setAttribute('color-theme','light');
    }
    
  }
  toggoleEvent5(event){
    console.log("warning",event.detail.checked);
    if(event.detail.checked){
      document.body.setAttribute('color-theme','light1');
    }
    else{
      document.body.setAttribute('color-theme','light');
    }
    
  }
}



