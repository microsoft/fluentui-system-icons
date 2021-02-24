import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const People24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 14h10c.78 0 1.42.6 1.5 1.36v2.14C15 21 11.28 22 8.5 22c-2.72 0-6.34-.96-6.5-4.27V15.5c0-.78.6-1.42 1.36-1.5h.14zm11.99 0h5.01c.78 0 1.42.6 1.5 1.36V17c0 3.06-2.86 4-5 4-.68 0-1.43-.1-2.14-.32a4.63 4.63 0 001.13-2.9l.01-.28v-2c0-.5-.15-.95-.4-1.34L15.5 14h5.01-5.01zM8.5 3a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm9 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill={primaryFill} /></svg>;
};

export default People24Filled;