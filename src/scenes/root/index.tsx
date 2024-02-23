import { Outlet } from 'react-router-dom';

type Props = {};

const Root = (props: Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Root;
