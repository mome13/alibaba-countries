import { ReactNode } from 'react';
import './button.css';
type Props = {
  children?: ReactNode;
  props?: any;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
};

const Button = ({ children, onClick, ...props }: Props) => {
  return (
    <button onClick={onClick} className='button' {...props}>
      {children}
    </button>
  );
};

export default Button;
