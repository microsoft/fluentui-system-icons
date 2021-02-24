import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Call24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.77 2.44l1.08-.35c1-.32 2.09.2 2.52 1.22l.86 2.03c.37.88.16 1.92-.52 2.57l-1.9 1.8a8.01 8.01 0 001.1 3.17 8.68 8.68 0 002.26 2.6l2.28-.76c.86-.29 1.8.04 2.33.82l1.23 1.8c.62.91.5 2.16-.26 2.93l-.81.82a3.02 3.02 0 01-3.06.77c-2.53-.79-4.87-3.14-7-7.05C5.75 10.9 5 7.57 5.62 4.84a3.26 3.26 0 012.15-2.4z" fill={primaryFill} /></svg>;
};

export default Call24Filled;