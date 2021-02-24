import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarWeekNumbers24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zM8.49 7.65a.75.75 0 00-1.49.1v1.1a.75.75 0 001.5-.1v-1.1zm0 7.5a.75.75 0 00-1.49.1v1.1a.75.75 0 001.5-.1v-1.1zm-.73-4.48a.75.75 0 00-.75.75L7 12.57v.1a.75.75 0 001.5-.1v-1.25a.75.75 0 00-.74-.65z" fill={primaryFill} /></svg>;
};

export default CalendarWeekNumbers24Filled;