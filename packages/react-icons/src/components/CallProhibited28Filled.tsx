import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallProhibited28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24.4 12.1a4.93 4.93 0 001.37-3.16 3.38 3.38 0 00-1.6-3.01C22.2 4.67 19 3.5 14 3.5c-5.02 0-8.2 1.17-10.16 2.43a3.38 3.38 0 00-1.61 3 4.93 4.93 0 001.36 3.17c.55.6 1.34.88 2.14.78l1.75-.22a2.75 2.75 0 002.33-2.06l.45-1.8c.1-.37.3-.58.52-.63.83-.22 2-.34 3.21-.34 1.22 0 2.4.11 3.23.33.21.06.43.27.52.64l.45 1.8a2.75 2.75 0 002.33 2.06l1.75.22c.8.1 1.6-.19 2.14-.78z" fill={primaryFill} /><path d="M20.5 19.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-1.5 0c0-1.11-.36-2.14-.97-2.97l-7 7A5 5 0 0019 19.5zm-2.03-4.03a5 5 0 00-7 7l7-7z" fill={primaryFill} /></svg>;
};

export default CallProhibited28Filled;