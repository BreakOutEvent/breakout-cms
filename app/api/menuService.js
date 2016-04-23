let MenuService = ($resource, API_URL) => {
  'ngInject';
  return $resource(API_URL+'/api/menu/:menuId', {menuId: '@_id'})
};

export default MenuService