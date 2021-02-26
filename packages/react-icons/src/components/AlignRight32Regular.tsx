import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignRight32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M29 4a1 1 0 10-2 0v24a1 1 0 102 0V4zm-7.5 1A3.5 3.5 0 0125 8.5v3a3.5 3.5 0 01-3.5 3.5h-15A3.5 3.5 0 013 11.5v-3A3.5 3.5 0 016.5 5h15zM23 8.5c0-.83-.67-1.5-1.5-1.5h-15C5.67 7 5 7.67 5 8.5v3c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-3zM21.5 17a3.5 3.5 0 013.5 3.5v3a3.5 3.5 0 01-3.5 3.5h-9A3.5 3.5 0 019 23.5v-3a3.5 3.5 0 013.5-3.5h9zm1.5 3.5c0-.83-.67-1.5-1.5-1.5h-9c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-3z" fill={primaryFill} /></svg>;
};

export default AlignRight32Regular;