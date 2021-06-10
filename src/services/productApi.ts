/* eslint-disable import/no-cycle */
import axios from 'axios';

import { ProductProps } from '../components/forms/ProductAdd';
import { ProductsState } from '../store/ducks/products/contracts/state';
import { HOST } from './API/authAPI';

// eslint-disable-next-line import/extensions

// eslint-disable-next-line import/prefer-default-export
export const ProductsAPI = {
  async fetchProduct(): Promise<ProductsState['data']> {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.get(`${HOST}/Products`, config);
    return data;
  },
  async addProduct(datas: ProductProps) {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.post(`${HOST}/Products`, datas, config);
    return data;
  },
  async editProduct(datas: ProductProps) {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.put(
      `${HOST}/Products/${datas.id}`,
      {
        title: datas.title,
        image: datas.image,
        composition: datas.composition,
        price: datas.price,
        type: datas.type,
      },
      config,
    );
    return data;
  },
  async deleteProduct(id?: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await axios.delete(`${HOST}/Products/${id}`);
  },
};
