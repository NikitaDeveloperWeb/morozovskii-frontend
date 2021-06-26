import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import arrow from '../../../assets/images/arrow.png';
interface ModalSortProps {
  _id: string;
  title: string;
  image: string;
  image2: string;
  image3: string;
  composition: string;
  price: number | string;
}

function ModalSort({ _id, title, image, image2, image3, composition, price }: ModalSortProps) {
  const [open, setOpen] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // slider
  const [activeImage, setActiveImage] = React.useState(image2);

  const handlerActiveImage = (image: string) => {
    console.log(image);
    setActiveImage(image);
  };

  const handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(modalRef.current)) {
      handleClose();
    }
  };
  React.useEffect(() => {
    document.querySelector('.modalOpen')?.addEventListener('click', handleOutsideClick);
  });
  return (
    <>
      <div className="modalSort">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <button type="button" onClick={() => handleOpen()}>
          Подробнее
        </button>
      </div>
      <div className={open ? 'modalOpen' : 'modalClose'}>
        <div className="modalOpen__window" ref={modalRef}>
          <div className="modalOpen__window__header">
            <span></span>
            <h2>{title}</h2>
            <CloseIcon onClick={() => handleClose()} />
          </div>
          <div className="modalOpen__window__info">
            <div className="modalOpen__window__info__img">
              <img
                src={arrow}
                alt=""
                className="arrow"
                style={{ transform: 'rotate(180deg)' }}
                onClick={() => {
                  handlerActiveImage(activeImage !== image2 ? image2 : image3);
                }}
              />
              <img src={activeImage} alt={title} />
              <img
                src={arrow}
                alt=""
                className="arrow"
                onClick={() => {
                  handlerActiveImage(activeImage !== image2 ? image2 : image3);
                }}
              />
            </div>
            <div className="modalOpen__window__info__data">
              <h3>Состав:</h3>
              <p>{composition}</p>
              <h3>Цена:</h3>
              <p>{price} руб.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSort;
