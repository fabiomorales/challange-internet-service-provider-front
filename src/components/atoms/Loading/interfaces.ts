export interface ILoadingSpinnerProps {
  size?: string;
}

export interface ILoadingProps {
  children: React.ReactNode;
}

export interface ISubcomponents {
  Spinner: React.FC<ILoadingSpinnerProps>;
  Dot: React.FC;
}
