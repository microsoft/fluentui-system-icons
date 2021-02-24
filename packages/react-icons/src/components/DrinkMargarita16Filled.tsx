import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DrinkMargarita16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.59 2a.5.5 0 00-.18-1l-4.25.76a.5.5 0 00-.4.38L8.57 3H3.5a.5.5 0 00-.5.5v3c0 1.1.9 2 2 2a3 3 0 002.5 2.96V14h-2a.5.5 0 000 1h5a.5.5 0 100-1h-2v-2.5-.04A3 3 0 0011 8.5a2 2 0 002-2v-3a.5.5 0 00-.5-.5H9.6l.07-.32L13.59 2zM8.35 4l-.22 1H4V4h4.35zM12 5H9.15l.22-1H12v1z" fill={primaryFill} /></svg>;
};

export default DrinkMargarita16Filled;