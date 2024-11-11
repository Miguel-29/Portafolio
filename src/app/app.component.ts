import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portafolio';

  
  constructor(elementRef: ElementRef) {
    // Code here or store it via an attribute accessor
  }

  @ViewChild('bgColor') bgColor!: ElementRef;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.bgColor.nativeElement.style.background = `radial-gradient(circle at ${event.clientX}px ${event.clientY}px, rgba(255, 0, 0, 0.15), transparent 80%`;
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    console.log(this.bgColor);
    
  }

}
