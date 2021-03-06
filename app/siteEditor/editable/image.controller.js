/**
 * Created by l.heddendorp on 20.03.2016.
 */
export default class SettingsCtrl {
  constructor ($mdDialog, $mdToast, Upload, $timeout, API_URL) {
    'ngInject';
    this._dialog = $mdDialog;
    this._mdToast = $mdToast.showSimple;
    this._upload = Upload;
    this._timeout = $timeout;
    this.API_URL = API_URL;
    this.progress = 0;
    this.uploading = false;
  }
  cancel(){
    this._dialog.cancel();
  }
  uploadFile(file) {
    if (file) {
      this.uploading = true;
      file.upload = this._upload.upload({
        url: this.API_URL+'/api/image',
        data: { image: file }
      });
      this.progress= 5;
      file.upload.then((response) => {
        this._timeout(() => {
          file.result = response.data;
          console.log(response.data);
          this._mdToast('Upload erfolgreich');
          this._dialog.hide(response.data.filePath);
          this.uploading = false;
        });
      }, (response) => {
        if (response.status > 0)
          this._mdToast(response.status + ': ' + response.data);
        this.uploading = false;
      }, (evt) => {
        this.progress = Math.min(100, parseInt(100.0 *
          evt.loaded / evt.total));
      });
    }
  }
}