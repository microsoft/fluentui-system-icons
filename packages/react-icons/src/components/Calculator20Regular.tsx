import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Calculator20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 11a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M8 14a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M13 12a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M14 14a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M10 12a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M11 14a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M7.5 4C6.67 4 6 4.67 6 5.5v1C6 7.33 6.67 8 7.5 8h5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-5zM7 5.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1z" fill={primaryFill} /><path d="M16 15.5a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 014 15.5v-11A2.5 2.5 0 016.5 2h7A2.5 2.5 0 0116 4.5v11zm-1-11c0-.83-.67-1.5-1.5-1.5h-7C5.67 3 5 3.67 5 4.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11z" fill={primaryFill} /></svg>;
};

export default Calculator20Regular;