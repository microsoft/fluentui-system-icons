import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoreHorizontal48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 24a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" fill={primaryFill} /><path d="M27.5 24a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" fill={primaryFill} /><path d="M35.5 27.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill={primaryFill} /></svg>;
};

export default MoreHorizontal48Filled;