export interface IMenuProps {
  children: React.ReactNode;
}
export interface ISubMenuProps {
  children: React.ReactNode;
  isOpen?: boolean;
}

export interface IMenuItemProps {
  label: string;
  onClick?: () => void;
}

export interface ISubcomponents {
  MenuItem: React.FC<IMenuItemProps>;
}
