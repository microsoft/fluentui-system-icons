import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Toolbox28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 6.25V8H4.25C3 8 2 9 2 10.25V14h5.5v-1.25a.75.75 0 111.5 0V14h10v-1.25a.75.75 0 111.5 0V14H26v-3.75C26 9 25 8 23.75 8H20V6.25C20 5 19 4 17.75 4h-7.5C9.01 4 8 5 8 6.25zm2.25-.75h7.5c.42 0 .75.33.75.75V8h-9V6.25c0-.42.34-.75.75-.75z" fill={primaryFill} /><path d="M26 15.5h-5.5v1.25a.75.75 0 01-1.5 0V15.5H9v1.25a.75.75 0 01-1.5 0V15.5H2v6.25C2 22.99 3 24 4.25 24h19.5C25 24 26 22.99 26 21.75V15.5z" fill={primaryFill} /></svg>;
};

export default Toolbox28Filled;