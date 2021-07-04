import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private config = { positionClass: 'toast-bottom-left' };
  constructor(private toastr: ToastrService) {}

  showSuccess(message, title) {
    this.toastr.success(message, title, this.config);
  }

  showError(message, title) {
    this.toastr.error(message, title, this.config);
  }

  showInfo(message, title) {
    this.toastr.info(message, title, this.config);
  }

  showWarning(message, title) {
    this.toastr.warning(message, title, this.config);
  }
}
