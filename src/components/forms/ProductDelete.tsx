import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ProductsAPI } from '../../services/productApi';
import Button from '../Button';
import { ProductProps } from './ProductAdd';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/ducks/products/actionCreators';
interface ProductDeleteProps {
  id: string;
}
const ProductDeleteSchema = yup.object().shape({});
function ProductDelete({ id }: ProductDeleteProps) {
  const ID = id;
  const dispatch = useDispatch();
  const { handleSubmit } = useForm<ProductProps>({
    resolver: yupResolver(ProductDeleteSchema),
  });
  const onSubmit = async (data: ProductProps) => {
    try {
      await ProductsAPI.deleteProduct(ID);
      alert('Продукт успешно удален!');
      dispatch(fetchProducts());
    } catch (error) {}
  };

  return (
    <form className="form-main" onSubmit={handleSubmit(onSubmit)}>
      <h2>Хотите удалить продукт?</h2>
      <Button type="submit" value="Удалить" className="Button-primary" />
    </form>
  );
}

export default ProductDelete;
