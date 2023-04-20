import { FC } from 'react';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../../utils/routes';

const NoMatch: FC = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to={routerPaths.home.default}>Go to the home page</Link>
      </p>
    </div>
  );
};

export default NoMatch;
