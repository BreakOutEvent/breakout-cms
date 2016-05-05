/**
 * Created by l.heddendorp on 04.03.2016.
 */
import angular from 'angular';
import ngResource from 'angular-resource';
import ngMaterial from 'angular-material';
import ngUpload from 'ng-file-upload';
import satellizer from 'satellizer';
import 'angular-drag-and-drop-lists';
import 'angular-material/angular-material.css';
import './../style/app.css';

import config from './app.config';
import theme from './app.theme';
import template from './app.ng.html';
import templateLib from './templateLib/templateLib';
import siteEditor from './siteEditor/siteEditor';
import apiServices from './api/apiServices';
import CreateSiteCtrl from './createSite/createSite.controller';
import MenuEditorCtrl from './menuEditor/menuEditor.controller';

class AppCtrl {
  constructor(Page, $log, $mdDialog, $mdToast, $mdSidenav, $auth, API_URL) {
    'ngInject';
    this.pages = Page.query();
    this._log = $log;
    this._dialog = $mdDialog;
    this._sidenav = $mdSidenav;
    this._mdToast = $mdToast.showSimple;
    this._auth = $auth;
    this.API_URL = API_URL;
    this.progress = 'determinate';
  }

  authenticated () {
    return this._auth.isAuthenticated();
  }

  login () {
    this.progress = 'indeterminate';
    this._auth.login(this.user)
      .then((response) => {
        this._log.debug(response);
        this.progress = 'determinate';
      })
      .catch((response) => {
        this._log.error(response);
        this._mdToast(response.data.message);
        this.progress = 'determinate';
      });
  }

  selectPage(page) {
    this._log.debug('Page selected:');
    this._log.debug(page);
    this.selectedPage = page;
  }

  createPage() {
    this._dialog.show({
      controller: CreateSiteCtrl,
      controllerAs: 'createSite',
      bindToController: true,
      template: require('./createSite/createSite.ng.html'),
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true
    });
  }

  editMenu() {
    this._dialog.show({
      controller: MenuEditorCtrl,
      controllerAs: 'editMenu',
      bindToController: true,
      locals:{pages: this.pages},
      template: require('./menuEditor/menu-editor.ng.html'),
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true
    });
  }

  toggleMenu (navID) {
    this._sidenav(navID)
      .toggle()
    .then(() => {});

  }
}

let app = {
  restrict: 'E',
  bindings: {},
  template,
  controller: AppCtrl,
  controllerAs: 'app'
};

angular
  .module('app', [
    ngMaterial,
    ngResource,
    ngUpload,
    satellizer,
    'dndLists',
    templateLib,
    siteEditor,
    apiServices
  ])
  .config(theme)
  .component('app', app);
config();