import React from 'react';
import Button from '../Button';
import Field from '../Field';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useHistory } from 'react-router-dom';
import { ProductsAPI } from '../../services/productApi';
import { useDispatch, useSelector } from 'react-redux';

import { SelectProductItems } from '../../store/ducks/products/selectors';
import { fetchProducts } from '../../store/ducks/products/actionCreators';

interface ProductEditProps {
  id: string;
  title: string;
  composition: string;
  price: number;
  image: string;
  type: string;
}

interface ProductID {
  id: string;
}

const ProductEditSchema = yup.object().shape({
  title: yup.string(),
  composition: yup.string(),
  image: yup.string(),
  type: yup.string(),
  price: yup.number(),
});

function ProductEdit({ id }: ProductID) {
  // const history = useHistory();
  const ID = id;
  const dispatch = useDispatch();
  //referents
  const { register, handleSubmit } = useForm<ProductEditProps>({
    resolver: yupResolver(ProductEditSchema),
  });

  const onSubmit = async (data: ProductEditProps) => {
    data.id = ID;
    try {
      await ProductsAPI.editProduct(data);
      dispatch(fetchProducts());
      alert('Продукт успешно изменён!');
    } catch (error) {}
  };

  const products = useSelector(SelectProductItems);
  let thisProduct = {
    title: '',
    composition: '',
    price: '',
    id: ID,
    type: '',
    image: '',
  };
  // eslint-disable-next-line array-callback-return
  products.map((product) => {
    if (product._id === ID) {
      thisProduct.title = product.title;
      thisProduct.composition = product.composition;
      thisProduct.price = product.price;
      thisProduct.type = product.type;
      thisProduct.image = product.image;
    }
  });
  return (
    <form className="form-main" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Новое название:</label>
      <Field
        type="text"
        name="title"
        className="field-main"
        fieldRef={register}
        value={thisProduct?.title}
      />
      <label htmlFor="price">Новая цена:</label>
      <Field
        type="text"
        name="price"
        className="field-main"
        fieldRef={register}
        value={thisProduct.price}
      />
      <label htmlFor="image">Новый URL изображения:</label>
      <Field
        type="text"
        name="image"
        className="field-main"
        fieldRef={register}
        value={thisProduct.image}
      />
      <label htmlFor="type">Новый тип Продукта:</label>
      <select name="type" id="" ref={register} value={thisProduct.type}>
        <option value="Хлеб">Хлеб</option>
        <option value="Батон">Батон</option>
        <option value="Булочное изделие">Булочное изделие</option>
      </select>
      <label htmlFor="composition">Новый состав:</label>
      <textarea name="composition" ref={register} value={thisProduct.composition}></textarea>
      <Button type="submit" value="Редактировать" className="Button-primary" />
    </form>
  );
}

export default ProductEdit;