import './select.css';

const Select = ({
  items,
  selected,
  onItemClick,
}: {
  items: Array<{ text: string }>;
  selected: any;
  onItemClick: (index: number) => void;
}) => {
  return (
    <div className='select'>
      {items.map((item, index) => {
        return (
          <button
            onClick={() => onItemClick(index)}
            className={`select__item ${
              index === selected ? 'select__item--selected' : ''
            }`}
            key={index}
          >
            {item.text}
          </button>
        );
      })}
    </div>
  );
};

export default Select;
