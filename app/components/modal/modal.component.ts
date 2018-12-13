import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { VinoInterface } from '../../models/vino';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }


  onSaveVino(vinoForm: NgForm): void {
    console.log(vinoForm.value.id);
    
    if (vinoForm.value.id == null) {
      console.log("añade");

      this.dataApi.addVino(vinoForm.value);
    } else {
      console.log("modifica");
      
      this.dataApi.updateVino(vinoForm.value);
    }
    vinoForm.resetForm();
    this.btnClose.nativeElement.click();
}

}
