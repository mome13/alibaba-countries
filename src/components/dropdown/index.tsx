import { ReactNode } from 'react';
import './dropdown.css';
import useDropDown from '@/hooks/use-dropdown';
import DropdownWrapper from '@/hocs/dropdown-wrapper';

type Props = {
  title: string;
  children?: ReactNode;
  Content: any;
};

const Dropdown = ({ title = 'Dropdown', children }: Props) => {
  const { dropdownStates, setDropdownStates } = useDropDown();

  return (
    <div className='dropdown'>
      <button
        onClick={() =>
          setDropdownStates((oldState: any) => ({
            ...oldState,
            isOpen: !oldState.isOpen,
          }))
        }
        className='dropdown__btn'
      >
        {dropdownStates?.selectedText ?? title}
        <i className='fa-solid fa-chevron-down'></i>
      </button>
      <div
        className={`dropdown__body ${dropdownStates.isOpen ? '' : 'hidden'}`}
      >
        {children}
      </div>
    </div>
  );
};
export default DropdownWrapper(Dropdown);
