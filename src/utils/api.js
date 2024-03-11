import { BASE_URL } from './constants';

class Api {
  constructor(url = BASE_URL) {
    this._url = url;
  }

  _makeFetchRequest(url, method = 'GET', body = null) {
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    return fetch(url, config)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro: ${res.status}`);
        }
        return res.json();
      })
      .catch((err) => console.log(err));
  }

  getInitialMenuItems() {
    return this._makeFetchRequest(`${BASE_URL}/appetizers`);
  }

  getCurrentCategoryMenu(category) {
    return this._makeFetchRequest(`${BASE_URL}/menu/categories/${category}`);
  }

  // getAllCartItems() {
  //   return this._makeFetchRequest(`${BASE_URL}/mycart`);
  // }

  addToCart(item) {
    console.log(item.category);
    return this._makeFetchRequest(`${BASE_URL}/mycart`, 'POST', {
      category: item.category,
      name: item.name,
      description: item.description,
      link: item.link,
      price: item.price,
      onSale: item.onSale,
      salePrice: item.salePrice,
    });
  }

  removeFromCart(item) {
    return this._makeFetchRequest(`${BASE_URL}/mycart`, 'DELETE', {
      _id: item._id,
    });
  }
}

const api = new Api();
export default api;
