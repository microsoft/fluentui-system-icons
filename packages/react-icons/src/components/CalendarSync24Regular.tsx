import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarSync24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v5.77c-.46-.3-.97-.53-1.5-.7V8.5h-15v9.25c0 .97.78 1.75 1.75 1.75h5.06c.18.53.42 1.04.71 1.5H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75V7h15v-.75c0-.97-.78-1.75-1.75-1.75z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM14.5 14c.28 0 .5.22.5.5v.55a3.49 3.49 0 015.34.4.5.5 0 11-.81.59A2.5 2.5 0 0015.5 16h1a.5.5 0 010 1h-2a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5zm5.5 5.95a3.49 3.49 0 01-5.18-.2.5.5 0 01.77-.64A2.5 2.5 0 0019.5 19h-1a.5.5 0 010-1h2c.28 0 .5.22.5.5v2a.5.5 0 01-1 0v-.55z" fill={primaryFill} /></svg>;
};

export default CalendarSync24Regular;