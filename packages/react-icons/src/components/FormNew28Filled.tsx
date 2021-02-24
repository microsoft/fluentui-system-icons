import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FormNew28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 12.5a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /><path d="M8.5 18.5a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M3 6.25C3 4.45 4.46 3 6.25 3h15.5C23.55 3 25 4.46 25 6.25v8.25A7.5 7.5 0 0014.5 25H6.25A3.25 3.25 0 013 21.75V6.25zm5.5 3.74a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM6 19.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zm6.75-8.99a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM6 6.8c0 .41.34.75.75.75h14.5a.75.75 0 000-1.5H6.75A.75.75 0 006 6.8z" fill={primaryFill} /><path d="M27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zM20.5 16a.5.5 0 00-.5.5V20h-3.5a.5.5 0 000 1H20v3.5a.5.5 0 001 0V21h3.5a.5.5 0 000-1H21v-3.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
};

export default FormNew28Filled;