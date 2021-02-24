import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Important20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3a2 2 0 00-2 2c0 2.07.75 4.91 1.18 6.4.1.36.44.6.82.6.39 0 .71-.24.82-.6C11.25 9.94 12 7.1 12 5a2 2 0 00-2-2zM7 5a3 3 0 016 0c0 2.25-.79 5.21-1.22 6.69-.24.8-.97 1.31-1.78 1.31s-1.54-.52-1.78-1.31C7.8 10.2 7 7.23 7 5zm3 10a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z" fill={primaryFill} /></svg>;
};

export default Important20Regular;