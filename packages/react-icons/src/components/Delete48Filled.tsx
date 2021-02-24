import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Delete48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 6.75a6.25 6.25 0 016.25 6.02V13H37a1.75 1.75 0 01.14 3.5h-1.31l-1.62 21.57A4.25 4.25 0 0129.97 42H18.03a4.25 4.25 0 01-4.24-3.93L12.17 16.5H11c-.92 0-1.67-.7-1.74-1.6l-.01-.15c0-.92.7-1.67 1.6-1.74L11 13h6.75c0-3.3 2.55-6 5.8-6.23l.22-.02H24zm3.75 13c-.65 0-1.18.5-1.24 1.12l-.01.13v12.13a1.25 1.25 0 002.5 0V20.87a1.25 1.25 0 00-1.25-1.12zm-7.5 0c-.65 0-1.18.5-1.24 1.12L19 21v12.13a1.25 1.25 0 002.5 0V20.87a1.25 1.25 0 00-1.25-1.12zm3.92-9.5H24a2.75 2.75 0 00-2.75 2.58V13h5.5a2.75 2.75 0 00-2.58-2.74z" fill={primaryFill} /></svg>;
};

export default Delete48Filled;