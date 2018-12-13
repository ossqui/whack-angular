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

    // this.dataApi.addVino(vinoForm.value);

    if (vinoForm.value.id == null) {
      vinoForm.value.userUid = this.userUid;
      this.dataApi.addVino(vinoForm.value);
    } else {
      this.dataApi.updateVino(vinoForm.value);
    }
    vinoForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}
