/**
 * Created by l.heddendorp on 13.03.2016.
 */
export default function theme($mdThemingProvider, $mdIconProvider) {
  'ngInject';
  $mdIconProvider
    .iconSet('icons', 'icons.svg');
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-orange')
    .accentPalette('blue-grey');
}
