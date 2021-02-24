import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Archive48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M37.75 8C38.99 8 40 9 40 10.25v5.5c0 1.16-.87 2.11-2 2.24v17.76c0 2.28-1.8 4.14-4.04 4.25H14.25A4.25 4.25 0 0110 35.96V17.99a2.25 2.25 0 01-2-2.24v-5.5C8 9.01 9 8 10.25 8h27.5zM35.5 18h-23v17.75c0 .92.7 1.67 1.6 1.74l.15.01h19.5c.92 0 1.67-.7 1.74-1.6l.01-.15V18zm-15.25 4.5h6.5a1.25 1.25 0 01.13 2.5h-6.63a1.25 1.25 0 01-.13-2.5h6.63-6.5zm17.25-12h-27v5h27v-5z" fill={primaryFill} /></svg>;
};

export default Archive48Regular;