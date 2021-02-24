import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBold16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3.3C4 2.6 4.6 2 5.3 2h3.3c2 0 3.5 1.7 3.5 3.5 0 .7-.2 1.4-.6 1.9.7.6 1.2 1.6 1.2 2.8 0 2.4-2 3.7-3.7 3.7H5.3c-.7.1-1.3-.5-1.3-1.2V3.3zm2.6 1.3v1.9h2a1 1 0 000-2h-2v.1zm0 4.5v2.4H9c.6 0 1.2-.5 1.2-1.2S9.6 9.1 9 9.1H6.6z" /></svg>;
};

export default TextBold16Filled;