import { FC, ReactNode } from 'react';
import { Flex, Typograph } from '../../atoms';
import { Menu } from '../../molecules';

export interface IMenuProps {
  menuItem?: ReactNode;
  children?: ReactNode;
  title?: string;
}

const Layout: FC<IMenuProps> = ({ menuItem, title, children }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignContent="center"
      alignItems="center"
      width="100%"
      minHeight="100vh"
    >
      <Menu>{menuItem}</Menu>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignContent="center"
        alignItems="center"
        width="100%"
        minHeight="100%"
        padding={16}
      >
        {title && (
          <Typograph type="headingsH1Bold" color="primary600" mb={30}>
            {title}
          </Typograph>
        )}
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
