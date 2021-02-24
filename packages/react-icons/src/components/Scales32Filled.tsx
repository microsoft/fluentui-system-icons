import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Scales32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4a1 1 0 000 2h1.56l-3.5 9.14a1 1 0 00-.06.36C3 18.08 4.92 20 7.5 20s4.5-1.92 4.5-4.5a1 1 0 00-.07-.36L8.44 6H15v16H9a3 3 0 100 6h14a3 3 0 000-6h-6V6h6.43l-3.37 9.15a1 1 0 00-.06.35c0 2.58 1.92 4.5 4.5 4.5s4.5-1.92 4.5-4.5a1 1 0 00-.06-.35L25.57 6H27a1 1 0 100-2H5zm2.5 5.14l2.05 5.36h-4.1L7.5 9.14zm14.93 5.36l2.07-5.6 2.07 5.6h-4.14z" fill={primaryFill} /></svg>;
};

export default Scales32Filled;