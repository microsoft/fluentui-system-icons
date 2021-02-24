import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarSync20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 7v2.6A5.5 5.5 0 009.6 17H5.5A2.5 2.5 0 013 14.5V7h14z" fill={primaryFill} /><path d="M14.5 3A2.5 2.5 0 0117 5.5V6H3v-.5A2.5 2.5 0 015.5 3h9z" fill={primaryFill} /><path d="M19.15 14.5a4.65 4.65 0 10-9.3 0 4.65 4.65 0 009.3 0zm-6.65-3.25c.28 0 .5.22.5.5v.17c.4-.27.88-.42 1.44-.42.99 0 1.9.44 2.45 1.22a.5.5 0 01-.81.59c-.36-.5-.95-.8-1.64-.8a1.48 1.48 0 00-1.16.49h.97a.5.5 0 110 1H12.5a.5.5 0 01-.5-.5v-1.75c0-.28.22-.5.5-.5zm3.5 5.69c-.42.33-.94.56-1.56.56-.91 0-1.75-.37-2.32-1.04a.5.5 0 11.77-.65c.36.43.9.69 1.55.69.43 0 .8-.19 1.12-.5h-.81a.5.5 0 110-1h1.75c.28 0 .5.22.5.5v1.75a.5.5 0 01-1 0v-.31z" fill={primaryFill} /></svg>;
};

export default CalendarSync20Filled;