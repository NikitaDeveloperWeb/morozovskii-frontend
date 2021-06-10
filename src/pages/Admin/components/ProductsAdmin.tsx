import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductAdd from '../../../components/forms/ProductAdd';
import ProductDelete from '../../../components/forms/ProductDelete';
import ProductEdit from '../../../components/forms/ProductEdit';
import ModalAdm from '../../../components/ModalAdm';
import { fetchProducts } from '../../../store/ducks/products/actionCreators';
import { SelectProductItems } from '../../../store/ducks/products/selectors';

function ProductsAdmin() {
  const dispatch = useDispatch();
  const products = useSelector(SelectProductItems);
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="adminContent">
      <h2>Продукция</h2>
      <ModalAdm title="Добавить..." form={<ProductAdd />} />
      <table>
        {products.map((product, index) => (
          <React.Fragment key={`${product._id}`}>
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Изображение</th>
                <th>Название</th>
                <th>Состав</th>
                <th>Цена</th>
                <th>Тип</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td>{product._id}</td> */}
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>{product.title}</td>
                <td>{product.composition}</td>
                <td>{product.price} руб.</td>
                <td>{product.type}</td>
                <td>
                  <ModalAdm title="Удалить..." form={<ProductDelete id={product._id} />} />
                  <ModalAdm title="Редактировать..." form={<ProductEdit id={product._id} />} />
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
}

export default ProductsAdmin;
