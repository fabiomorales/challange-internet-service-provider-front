import { FC } from 'react';
import { ILinkProps } from './interfaces';
import * as S from './styles';

const Link: FC<ILinkProps> = ({ href, text, children }) => {
  return (
    <S.Link to={href}>
      {text && (
        <S.Typograph type="bodyTextRegular" color="linkBase" cursor="pointer" textDecorationLine="underline">
          {text}
        </S.Typograph>
      )}
      {children}
    </S.Link>
  );
};

export default Link;
