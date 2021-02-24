import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Clock20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm-.5 2a.5.5 0 01.5.41V10h2.5a.5.5 0 01.09 1H9.5a.5.5 0 01-.5-.41V5.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default Clock20Regular;