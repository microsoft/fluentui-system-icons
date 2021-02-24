import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleLeft28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 17a3 3 0 100-6 3 3 0 000 6z" fill={primaryFill} /><path d="M8 8a6 6 0 000 12h12a6 6 0 000-12H8zm-4.5 6A4.5 4.5 0 018 9.5h12a4.5 4.5 0 110 9H8A4.5 4.5 0 013.5 14z" fill={primaryFill} /></svg>;
};

export default ToggleLeft28Regular;