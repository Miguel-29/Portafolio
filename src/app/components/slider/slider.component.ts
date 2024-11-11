import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { Slider } from '../../interface/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements AfterViewInit {
  @Input() dataSource: Slider[] = [];
  @Input() nameSlider: string = "";
  @Input() selected: number = 1;

  // selected: number = 1;

  ngAfterViewInit(): void {
  }

}
