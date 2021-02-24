import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronUp20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.15 12.35a.5.5 0 010-.7L9.6 6.16a.55.55 0 01.78 0l5.46 5.49a.5.5 0 01-.7.7L10 7.2l-5.15 5.16a.5.5 0 01-.7 0z" fill={primaryFill} /></svg>;
};

export default ChevronUp20Regular;