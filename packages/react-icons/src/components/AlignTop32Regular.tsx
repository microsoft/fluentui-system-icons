import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignTop32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a1 1 0 000 2h24a1 1 0 100-2H4zm1 7.5A3.5 3.5 0 018.5 7h3a3.5 3.5 0 013.5 3.5v15a3.5 3.5 0 01-3.5 3.5h-3A3.5 3.5 0 015 25.5v-15zM8.5 9C7.67 9 7 9.67 7 10.5v15c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5h-3zm8.5 1.5A3.5 3.5 0 0120.5 7h3a3.5 3.5 0 013.5 3.5v9a3.5 3.5 0 01-3.5 3.5h-3a3.5 3.5 0 01-3.5-3.5v-9zM20.5 9c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-3z" fill={primaryFill} /></svg>;
};

export default AlignTop32Regular;