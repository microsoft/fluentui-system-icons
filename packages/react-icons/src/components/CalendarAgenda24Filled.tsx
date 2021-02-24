import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarAgenda24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 17.75c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5zm-4-10c0-.38-.28-.7-.65-.74l-.1-.01h-8.6a.75.75 0 000 1.5h8.7a.75.75 0 00.65-.75zm0 8.5c0-.38-.28-.7-.65-.74l-.1-.01h-8.6a.75.75 0 000 1.5h8.7a.75.75 0 00.65-.75zM17 12c0-.38-.28-.7-.65-.74l-.1-.01h-8.6a.75.75 0 000 1.5h8.7A.75.75 0 0017 12z" fill={primaryFill} /></svg>;
};

export default CalendarAgenda24Filled;