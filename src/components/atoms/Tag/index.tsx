import { FC } from 'react';
import * as S from './styles';
import { ITagProps } from './interfaces';

const Tag: FC<ITagProps> = ({ children, className, ...props }) => {
  return (
    <S.Tag className={className} {...props}>
      {children}
    </S.Tag>
  );
};

export default Tag;
