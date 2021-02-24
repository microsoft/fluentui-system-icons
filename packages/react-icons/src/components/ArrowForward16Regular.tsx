import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowForward16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.32 3.61l3.53 3.54c.2.2.2.5 0 .7l-3.53 3.54a.5.5 0 01-.7-.7L12.28 8H2.5a.5.5 0 01-.5-.41V7.5a.5.5 0 01.41-.5h9.89L9.6 4.32a.5.5 0 01.7-.7z" fill={primaryFill} /></svg>;
};

export default ArrowForward16Regular;