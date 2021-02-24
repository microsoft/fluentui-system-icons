import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarDay28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.75 3C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 21.75V6.25C3 4.45 4.46 3 6.25 3h15.5zM19 12H9a1 1 0 00-1 .88V19a1 1 0 00.88 1H19a1 1 0 001-.88V13a1 1 0 00-.88-1H19zm-.5 1.5v5h-9v-5h9zM19 8H8.9a.75.75 0 000 1.5h10.2a.75.75 0 000-1.5H19z" fill={primaryFill} /></svg>;
};

export default CalendarDay28Filled;