import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronCircleDown24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zM7.47 9.97c-.3.3-.3.77 0 1.06l4 4c.3.3.77.3 1.06 0l4-4a.75.75 0 10-1.06-1.06L12 13.44 8.53 9.97a.75.75 0 00-1.06 0z" fill={primaryFill} /></svg>;
};

export default ChevronCircleDown24Filled;