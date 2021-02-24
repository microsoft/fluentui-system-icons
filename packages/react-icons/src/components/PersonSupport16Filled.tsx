import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonSupport16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 9.75c0-.83-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4v-.5z" fill={primaryFill} /><path d="M10.75 4.5A2.75 2.75 0 005.69 3H4a.5.5 0 00-.5.5v2a.5.5 0 000 .05v.95C3.5 7.33 4.17 8 5 8h.38a.61.61 0 10-.46-1 .5.5 0 01-.42-.5V6h.25c.3 0 .57-.09.8-.24a2.75 2.75 0 005.2-1.26zm-5.5 0a.5.5 0 01-.5.5H4.5V4h.75v.5z" fill={primaryFill} /></svg>;
};

export default PersonSupport16Filled;