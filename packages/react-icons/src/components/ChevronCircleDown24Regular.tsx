import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronCircleDown24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM7.47 9.97c.3-.3.77-.3 1.06 0L12 13.44l3.47-3.47a.75.75 0 111.06 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
};

export default ChevronCircleDown24Regular;