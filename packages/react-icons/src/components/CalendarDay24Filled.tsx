import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarDay24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm-1.5 8h-8.5c-.38 0-.7.28-.74.65l-.01.1v4.5c0 .38.28.7.65.74l.1.01h8.5c.38 0 .7-.28.74-.65l.01-.1v-4.5c0-.38-.28-.7-.65-.74l-.1-.01zm-.75 1.5v3h-7v-3h7zm.75-5.25h-8.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
};

export default CalendarDay24Filled;