import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
interface ModalSortProps {
  _id: string;
  title: string;
  image: string;
  composition: string;
  price: number | string;
}

function ModalSort({ _id, title, image, composition, price }: ModalSortProps) {
  const [open, setOpen] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
            <img src={image} alt={title} />
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
