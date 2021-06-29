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
  image2?: string;
  image3?: string;
  type: string;
}

interface ProductID {
  id: string;
}

const ProductEditSchema = yup.object().shape({
  title: yup.string(),
  composition: yup.string(),
  image: yup.string(),
  image2: yup.string(),
  image3: yup.string(),
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
    image2: '',
    image3: '',
  };
  // eslint-disable-next-line array-callback-return
  products.map((product) => {
    if (product._id === ID) {
      thisProduct.title = product.title;
      thisProduct.composition = product.composition;
      thisProduct.price = product.price;
      thisProduct.type = product.type;
      thisProduct.image = product.image;
      thisProduct.image2 = product.image2;
      thisProduct.image3 = product.image3;
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
        defaultValue={thisProduct?.title}
      />
      <label htmlFor="price">Новая цена:</label>
      <Field
        type="text"
        name="price"
        className="field-main"
        fieldRef={register}
        defaultValue={thisProduct.price}
      />
      <label htmlFor="image">Новый URL главного изображения:</label>
      <Field
        type="text"
        name="image"
        className="field-main"
        fieldRef={register}
        defaultValue={thisProduct.image}
      />
      <label htmlFor="image">Новый URL второстепенного изображения:</label>
      <Field
        type="text"
        name="image2"
        className="field-main"
        fieldRef={register}
        defaultValue={thisProduct.image2}
      />
      <label htmlFor="image">Новый URL второстепенного изображения:</label>
      <Field
        type="text"
        name="image3"
        className="field-main"
        fieldRef={register}
        defaultValue={thisProduct.image3}
      />
      <label htmlFor="type">Новый тип Продукта:</label>
      <select name="type" id="" ref={register} defaultValue={thisProduct.type}>
        <option value="Хлеб">Хлеб</option>
        <option value="Батон">Батон</option>
        <option value="Хлебобулочное изделие">Хлебобулочное изделие</option>
      </select>
      <label htmlFor="composition">Новый состав:</label>
      <textarea name="composition" ref={register} defaultValue={thisProduct.composition}></textarea>
      <Button type="submit" value="Редактировать" className="Button-primary" />
    </form>
  );
}

export default ProductEdit;
