import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Storage24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 7h14a3 3 0 013 2.82V14a3 3 0 01-2.82 3H5a3 3 0 01-3-2.82V10a3 3 0 012.82-3H19 5zm14 1.5H5c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5zM18 10a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
};

export default Storage24Regular;