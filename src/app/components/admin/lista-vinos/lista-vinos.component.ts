import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { VinoInterface } from '../../../models/vino';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../../models/user'

@Component({
  selector: 'app-lista-vinos',
  templateUrl: './lista-vinos.component.html',
  styleUrls: ['./lista-vinos.component.css']
})
export class ListaVinosComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  private vinos: VinoInterface[];
  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit() {
    this.getListVinos();
  }


  getListVinos() {
    this.dataApi.getAllVinos()
      .subscribe(vinos => {
        this.vinos = vinos;
      });
  }

  onDeleteVino(idVino: string): void {
    const confirmacion = confirm('¿Estas seguro de eliminar el campo?');
    if (confirmacion) {
      this.dataApi.deleteVino(idVino);
    }
  }

  onPreUpdateVino(vino: VinoInterface) {
    this.dataApi.selectedVino = Object.assign({}, vino);
  }

}
