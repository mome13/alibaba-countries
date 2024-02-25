import { useState } from 'react';
import { DropdownProvider } from '@/hooks/use-dropdown';

export default function DropdownWrapper(ComposedComponent: any) {
  function DropDownProvider(props: any) {
    const [dropdownStates, setDropdownStates] = useState({
      isOpen: false,
    });

    return (
      <DropdownProvider value={{ dropdownStates, setDropdownStates }}>
        <ComposedComponent {...props} />
      </DropdownProvider>
    );
  }

  return DropDownProvider;
}
