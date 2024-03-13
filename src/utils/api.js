import { BASE_URL } from './constants';

class Api {
  constructor(url = BASE_URL) {
    this._url = url;
  }

  _makeFetchRequest(url, method = 'GET', body = null) {
    const config = {
      method,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
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

  getItemById(id) {
    return this._makeFetchRequest(`${BASE_URL}/menu/${id}`);
  }

  getAllCartItems() {
    return this._makeFetchRequest(`${BASE_URL}/mycart`);
  }

  addToCart(item) {
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
    return this._makeFetchRequest(`${BASE_URL}/mycart`, 'DELETE', item);
  }
}

const api = new Api();
export default api;
