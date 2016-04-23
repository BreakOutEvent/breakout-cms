/**
 * Created by l.heddendorp on 05.03.2016.
 */
let ViewService = ($resource, API_URL) => {
  'ngInject';
  return $resource(API_URL+'/api/view/:view_id', {view_id: '@_id'})
};

export default ViewService
