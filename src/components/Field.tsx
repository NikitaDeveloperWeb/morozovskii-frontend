import React from 'react';

interface FieldProps {
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
  fieldRef?: any;
  className?: string;
  form?: string;
  accept?: string;
  icon?: JSX.Element;
  children?: string;
  value?: string;
}

function Field({
  type,
  name,
  id,
  placeholder,
  fieldRef,
  className,
  form,
  accept,
  icon,
  children,
  value,
}: FieldProps) {
  const [focus, setFocus] = React.useState(false);
  const fieldReferens = React.useRef<HTMLDivElement>(null);

  const handleFocusField = (state: boolean) => {
    setFocus(!state);
  };

  //outside click listener
  const handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(fieldReferens.current)) {
      setFocus(false);
    }
  };
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  });

  return (
    <div
      className={!focus ? className : `${className}__focus`}
      onFocus={() => handleFocusField(focus)}
      ref={fieldReferens}>
      <div className="icon">{icon}</div>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        ref={fieldRef}
        form={form}
        accept={accept}
        defaultValue={(value && value) || ''}
      />
      {children && <div className="accept">{children}</div>}
    </div>
  );
}

export default Field;
