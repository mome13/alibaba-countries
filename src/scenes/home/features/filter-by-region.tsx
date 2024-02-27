import { useEffect } from 'react';
import Select from '@/components/select';
import { useSearchParams } from 'react-router-dom';
import useDropDown from '@/hooks/use-dropdown';
import DropdownContent from '@/components/dropdown/dropdown-content';

const FilterByRegion = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setDropdownStates } = useDropDown();

  const regions: Array<{ text: string }> = [
    {
      text: 'Africa',
    },
    {
      text: 'America',
    },
    {
      text: 'Asia',
    },
    {
      text: 'Europe',
    },
    {
      text: 'Oceania',
    },
  ];

  const typeSearchParams = searchParams.get('type');
  const selected = regions.findIndex(({ text }) => {
    return text.toLowerCase() === (typeSearchParams ?? '').toLowerCase();
  });

  useEffect(() => {
    setDropdownStates((old: any) => ({
      ...old,
      isOpen: false,
      selectedText: selected >= 0 ? regions[selected].text : null,
    }));
  }, [typeSearchParams]);

  const onItemClick = (index: number) => {
    // (index >= 0) means user selected sth in the list
    // (selected !== index) means user select new item
    if (index >= 0 && selected !== index) {
      searchParams.set('type', regions[index].text.toLowerCase());
    } else {
      searchParams.delete('type');
    }
    setSearchParams(searchParams);
  };

  return (
    <DropdownContent>
      <Select
        items={regions}
        selected={selected}
        onItemClick={onItemClick}
      />
    </DropdownContent>
  );
};

export default FilterByRegion;
