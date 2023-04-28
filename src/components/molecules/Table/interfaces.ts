export interface ITableProps {
  thList: Array<{ name: string }>;
  children: React.ReactNode;
}

export interface ITDProps {
  children: React.ReactNode;
}

export interface Subcomponents {
  TD: React.FC<ITDProps>;
}
