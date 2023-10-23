import { Component } from '@angular/core';
import { ArtData } from 'src/app/data/ArtData';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent {
  gallery = ArtData
}
