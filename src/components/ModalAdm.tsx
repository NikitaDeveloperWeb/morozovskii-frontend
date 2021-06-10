import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
interface ModalAdmProps {
  title: string;
  form: JSX.Element | JSX.Element[];
}

function ModalAdm({ title, form }: ModalAdmProps) {
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
      <div className="modalAdm">
        <button onClick={() => handleOpen()}>{title}</button>
      </div>
      <div className={open ? 'modalOpen' : 'modalClose'}>
        <div className="modalOpen__window" ref={modalRef}>
          <div className="modalOpen__window__header">
            <span></span>
            <h2>{title}</h2>
            <CloseIcon onClick={() => handleClose()} />
          </div>
          <div className="modalOpen__window__info">{form}</div>
        </div>
      </div>
    </>
  );
}

export default ModalAdm;
