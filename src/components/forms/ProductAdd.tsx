import React from 'react';
import Button from '../Button';
import Field from '../Field';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductsAPI } from '../../services/productApi';
import { fetchProducts } from '../../store/ducks/products/actionCreators';
import { useDispatch } from 'react-redux';
export interface ProductProps {
  id?: string;
  title: string;
  composition: string;
  price: number;
  image: string;
  type: string;
}

const ProductAddSchema = yup.object().shape({
  title: yup.string(),
  composition: yup.string(),
  image: yup.string(),
  type: yup.string(),
  price: yup.number(),
});

function ProductAdd() {
  const dispatch = useDispatch();
  //referents
  const { register, handleSubmit } = useForm<ProductProps>({
    resolver: yupResolver(ProductAddSchema),
  });

  const onSubmit = async (data: ProductProps) => {
    try {
      await ProductsAPI.addProduct(data);
      dispatch(fetchProducts());
      alert('Продукт успешно добавлен!');
    } catch (error) {}
  };
  return (
    <form className="form-main" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Название:</label>
      <Field type="text" name="title" className="field-main" fieldRef={register} />
      <label htmlFor="price">Цена:</label>
      <Field type="text" name="price" className="field-main" fieldRef={register} />
      <label htmlFor="image">URL изображения:</label>
      <Field type="text" name="image" className="field-main" fieldRef={register} />
      <label htmlFor="type">Тип Продукта:</label>
      <select name="type" id="" ref={register}>
        <option value="Хлеб">Хлеб</option>
        <option value="Батон">Батон</option>
        <option value="Булочное изделие">Булочное изделие</option>
      </select>
      <label htmlFor="composition">Состав:</label>
      <textarea name="composition" ref={register}></textarea>
      <Button type="submit" value="Добавить" className="Button-primary" />
    </form>
  );
}

export default ProductAdd;
