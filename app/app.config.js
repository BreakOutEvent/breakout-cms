/**
 * Created by l.heddendorp on 23.04.2016.
 */
export default function () {
  angular
    .module('app')
    .config(($authProvider, API_URL) => {
      'ngInject';
      $authProvider.baseUrl = null;
      $authProvider.loginUrl = API_URL+'/api/auth/login';
    })
    .constant('API_URL', '//localhost:3000');
}