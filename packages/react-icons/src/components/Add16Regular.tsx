import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Add16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.91 3H8a.5.5 0 01.5.41V7.5h4a.5.5 0 01.5.41V8a.5.5 0 01-.41.5H8.5v4a.5.5 0 01-.41.5H8a.5.5 0 01-.5-.41V8.5h-4a.5.5 0 01-.5-.41V8a.5.5 0 01.41-.5H7.5v-4a.5.5 0 01.41-.5H8h-.09z" fill={primaryFill} /></svg>;
};

export default Add16Regular;