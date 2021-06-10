import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/ducks/products/actionCreators';
import { SelectProductItems } from '../../../store/ducks/products/selectors';
import ModalSort from './ModalSort';

const Categories = ['Хлеб', 'Батоны', 'Булочки'];

function SotrProducts() {
  const dispatch = useDispatch();
  const products = useSelector(SelectProductItems);
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const Bread = products.filter((prod) => prod.type === 'Хлеб');
  const Loaves = products.filter((prod) => prod.type === 'Батон');
  const Buns = products.filter((prod) => prod.type === 'Булочное изделие');
  const [active, setActive] = React.useState(0);

  const handelerAciveItem = (index: number) => {
    setActive(index);
  };
  return (
    <div className="sortProducts">
      <ul className="sortProducts__nav">
        {Categories.map((categ, index) => (
          <li
            key={`${index}+${categ}`}
            className={active === index ? 'active_sort' : ''}
            onClick={() => handelerAciveItem(index)}>
            {categ}
          </li>
        ))}
      </ul>
      <div className="line">
        <svg
          width="333"
          height="5"
          viewBox="0 0 333 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="0.993976" y1="4.50004" x2="332.994" y2="0.500036" stroke="black" />
        </svg>
      </div>
      <ul className="sortProducts__products">
        {active === 0 &&
          Bread.map((bread, index) => (
            <li key={`${bread._id} + ${index}`}>
              <ModalSort
                _id={bread._id}
                title={bread.title}
                composition={bread.composition}
                price={bread.price}
                image={bread.image}
              />
            </li>
          ))}
        {/* ____ */}
        {active === 1 &&
          Loaves.map((loaves, index) => (
            <li key={`${loaves._id} + ${index}`}>
              <ModalSort
                _id={loaves._id}
                title={loaves.title}
                composition={loaves.composition}
                price={loaves.price}
                image={loaves.image}
              />
            </li>
          ))}
        {/* ____ */}
        {active === 2 &&
          Buns.map((buns, index) => (
            <li key={`${buns._id} + ${index}`}>
              <ModalSort
                _id={buns._id}
                title={buns.title}
                composition={buns.composition}
                price={buns.price}
                image={buns.image}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SotrProducts;
