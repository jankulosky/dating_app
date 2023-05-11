import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent {
  title = '';
  message = '';
  btnOkText = '';
  btnCancelText = '';
  result = false;

  constructor(public BsModalRef: BsModalRef) {}

  confirm() {
    this.result = true;
    this.BsModalRef.hide();
  }

  decline() {
    this.result = false;
    this.BsModalRef.hide();
  }
}
