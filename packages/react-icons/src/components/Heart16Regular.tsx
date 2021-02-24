import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Heart16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.54 3.95a3.25 3.25 0 00-4.6-.01 3.25 3.25 0 00.02 4.6l4.7 4.7c.2.2.52.2.71 0l4.69-4.68a3.25 3.25 0 00-4.61-4.6l-.46.44-.45-.45zm4.8 3.9l-4.32 4.33-4.36-4.36a2.25 2.25 0 010-3.18c.87-.87 2.3-.87 3.17.01l.81.81c.2.2.53.2.72 0l.79-.8c.88-.88 2.3-.87 3.19.01.88.88.88 2.3 0 3.18z" fill={primaryFill} /></svg>;
};

export default Heart16Regular;