import {AfterContentInit, Component, ContentChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent  implements AfterContentInit {
  @Input('srvElement') element:{name:string, type:string, content:string};
  @Input() name : string;
  @ContentChild('contentParagraph', { static: true }) paragraph :ElementRef;

  ngAfterContentInit(): void {
    console.log('After content init ' + this.paragraph.nativeElement.content)
  }
}
