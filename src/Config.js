export const baseUrl = 'https://blackknight-ig.herokuapp.com';

/**This Function will only check if admin is already logged in or not */
export const chekAdminAuth = async () => {
  if (localStorage.getItem('admin') === null) {
    Promise.reject();
  }
  return false;
};

export const getAdmin = () => {
  var admin = localStorage.getItem('admin');
  if (admin) {
    return JSON.parse(admin);
  }
  return admin;
};

export const getToken = () => {
  var token = localStorage.getItem('token');
  return token;
};
