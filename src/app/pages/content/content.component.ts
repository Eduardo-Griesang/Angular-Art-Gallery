import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtData } from 'src/app/components/data/ArtData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  artPhoto:string = ""
  contentTitle:string = ""
  contentDescription = ""
  private id:string | null = "0"

  constructor(
    private rout:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.rout.paramMap.subscribe( e =>
      this.id = e.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = ArtData.filter(art => art.id === id)
    
    this.artPhoto = result[0].photo
    this.contentTitle = result[0].title
    this.contentDescription = result[0].description
  }

}
