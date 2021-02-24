import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Options16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 9a2 2 0 011.94 1.5h5.56a.5.5 0 01.09 1H7.94a2 2 0 01-3.88 0H2.5a.5.5 0 01-.09-1H4.06A2 2 0 016 9zm4-6a2 2 0 011.94 1.5h1.56a.5.5 0 01.09 1H11.94a2 2 0 01-3.88 0H2.5a.5.5 0 01-.09-1H8.06A2 2 0 0110 3z" fill={primaryFill} /></svg>;
};

export default Options16Filled;