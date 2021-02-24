import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBold16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3.1C4 2.5 4.5 2 5.1 2h3c2.1 0 3.4 1.4 3.4 3.4 0 .9-.3 2-.7 2.6.8.6 1.4 1.2 1.4 2.5 0 2.7-2.1 3.5-3.6 3.5H5.1c-.6 0-1.1-.5-1.1-1.1V3.1zM6 9v3h2.4c.7 0 1.5-.5 1.5-1.5S9.1 9 8.4 9H6zm0-2h2.2c.9 0 1.5-.7 1.5-1.5S9.1 4 8.3 4H6v3z" /></svg>;
};

export default TextBold16Regular;