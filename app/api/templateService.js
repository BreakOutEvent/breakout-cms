/**
 * Created by l.heddendorp on 05.03.2016.
 */
let TemplateService = ($http, API_URL) => {
  'ngInject';
  return {
    getList: function () {
      return $http.get(API_URL+'/api/getList')
    },
    getHtml: function (templateName) {
      return $http.get(API_URL+'/api/html/' + templateName)
    }
  }
};

export default TemplateService
