/**
 * Created by l.heddendorp on 05.03.2016.
 */
let PageService = ($resource, API_URL) => {
  'ngInject';
  return $resource(API_URL+'/api/page/:pageId', {pageId: '@_id'})
};

export default PageService
