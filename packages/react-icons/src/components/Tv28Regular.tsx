import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Tv28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 4A3.25 3.25 0 002 7.25v10.5C2 19.55 3.46 21 5.25 21h17.5c1.8 0 3.25-1.45 3.25-3.25V7.25C26 5.45 24.55 4 22.75 4H5.25zM3.5 7.25c0-.97.79-1.75 1.75-1.75h17.5c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75H5.25c-.96 0-1.75-.78-1.75-1.75V7.25z" fill={primaryFill} /><path d="M6.75 23a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H6.75z" fill={primaryFill} /></svg>;
};

export default Tv28Regular;