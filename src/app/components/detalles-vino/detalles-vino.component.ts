import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { VinoInterface } from '../../models/vino';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalles-vino',
  templateUrl: './detalles-vino.component.html',
  styleUrls: ['./detalles-vino.component.css']
})
export class DetallesVinoComponent implements OnInit {

  public vino: VinoInterface = {};

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    const idVino = this.route.snapshot.params['id'];
    this.getDetails(idVino);
  }

  getDetails(idVino: string): void {
    this.dataApi.getOneVino(idVino).subscribe(vino => {
      this.vino = vino;
    });
}

}
