import { FC } from 'react';

import { routerPaths } from '../../../utils/routes';
import { Link, Typograph } from '../../atoms';

const Home: FC = () => {
  return (
    <div>
      Hello World!
      <tbody>
        <tr>
          <Link href={routerPaths.dashboard.default}>
            <Typograph type="bodyTextRegular" color="linkBase" cursor="pointer">
              Dashboard
            </Typograph>
          </Link>
        </tr>
        <tr>Teste 2</tr>
        <tr>Teste 3</tr>
      </tbody>
    </div>
  );
};

export default Home;
