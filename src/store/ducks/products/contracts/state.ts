import { LoadingState } from '../../../types';

export interface Products {
  _id: string;
  title: string;
  composition: string;
  price: string;
  type: string;
  image: string;
  image2: string;
  image3: string;
}

export interface ProductsState {
  data: Products[];
  loadingState: LoadingState;
}
