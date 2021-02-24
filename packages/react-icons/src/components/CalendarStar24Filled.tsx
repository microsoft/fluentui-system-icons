import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarStar24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM21 8.5v3.52A6.5 6.5 0 0012.02 21H6.25A3.25 3.25 0 013 17.75V8.5h18zm-4.02 5.55l-.04.1-.55 1.78h-1.8c-.54 0-.78.67-.42 1.04l.07.06 1.46 1.1-.56 1.8c-.16.52.38.97.82.72l.08-.05 1.46-1.1 1.46 1.1c.43.33 1-.07.92-.58l-.02-.1-.56-1.78 1.46-1.1c.43-.33.25-1.02-.25-1.1H18.61l-.55-1.8a.58.58 0 00-1.08-.1zM17.75 3C19.55 3 21 4.46 21 6.25V7H3v-.75C3 4.45 4.46 3 6.25 3h11.5z" fill={primaryFill} /></svg>;
};

export default CalendarStar24Filled;