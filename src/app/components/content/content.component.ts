import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from '../slider/slider.component';
import { Slider } from '../../interface/slider';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgbNavModule, SliderComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  active = 1;

  landingPageDataSource: Slider[] = [{
    id: 1,
    img: "assets/images/lanP/lp-Corporativa.png",
    text: "Corporativa",

  },
  {
    id: 2,
    img: "assets/images/lanP/lp-Finance.jpg",
    text: "Finance",

  },
  {
    id: 3,
    img: "assets/images/lanP/lp-Negocios.jpeg",
    text: "Negocios",

  },
  {
    id: 4,
    img: "assets/images/lanP/lp-Form.jpg",
    text: "Form",

  },
  {
    id: 5,
    img: "assets/images/lanP/lp-Pasarela.jpg",
    text: "Pasarela",

  }]

  dashboardDataSource: Slider[] = [{
    id: 11,
    img: "assets/images/dash/ds-Analitica.jpg",
    text: "Analisis",
  },
  {
    id: 12,
    img: "assets/images/dash/ds-clasico.jpeg",
    text: "Clasico",

  }, {
    id: 13,
    img: "assets/images/dash/ds-Corporativo.jpg",
    text: "Corporativo",

  }, {
    id: 14,
    img: "assets/images/dash/ds-standar.png",
    text: "Estandar",

  }, {
    id: 15,
    img: "assets/images/dash/ds-store.png",
    text: "Tienda",
  }]

  loginDataSource: Slider[] = [{
    id: 21,
    img: "assets/images/login/lg-bgImagem.jpg",
    text: "Imagen de fondo",
  },
  {
    id: 22,
    img: "assets/images/login/lg-Google.jpg",
    text: "Estilo Google",

  }, {
    id: 23,
    img: "assets/images/login/lg-Moderno.jpg",
    text: "Moderno",

  }, {
    id: 24,
    img: "assets/images/login/lg-Simple.jpg",
    text: "Sencillo",

  }, {
    id: 25,
    img: "assets/images/login/lg-Slider.jpg",
    text: "Con slider",
  }]
}
