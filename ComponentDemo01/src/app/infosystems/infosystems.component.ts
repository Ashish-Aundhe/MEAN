import { Component } from '@angular/core';

@Component({
  selector: 'app-infosystems',
  templateUrl: './infosystems.component.html',
  styleUrls: ['./infosystems.component.css']
})
export class InfosystemsComponent 
{
 name: string  = "Angular-12";

 fun (): string
 {
  return "Inside fun()"
 }  
}
