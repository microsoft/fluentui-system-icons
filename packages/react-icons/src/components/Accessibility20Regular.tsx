import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Accessibility20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a2.5 2.5 0 00-2.4 3.21l-2.24-.84a1.75 1.75 0 00-1.24 3.26L7 8.73v2.4l-1.64 4.53a1.75 1.75 0 003.28 1.2L10 13.15l1.37 3.7a1.75 1.75 0 003.27-1.2L13 11.13v-2.4l2.87-1.08a1.75 1.75 0 10-1.25-3.28l-2.22.84A2.5 2.5 0 0010 2zM8.5 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6.48.8a.75.75 0 11.53 1.41l-3.19 1.21a.5.5 0 00-.32.47v2.83l.03.17 1.67 4.6a.75.75 0 01-1.4.52l-1.37-3.72a1 1 0 00-1.86 0L7.7 16.52A.75.75 0 016.3 16l1.67-4.6a.5.5 0 00.03-.17V8.39a.5.5 0 00-.32-.46L4.48 6.7A.75.75 0 015 5.3l4.1 1.56c.58.21 1.2.21 1.78 0l4.09-1.56z" fill={primaryFill} /></svg>;
};

export default Accessibility20Regular;