import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarStar24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.25-9C19.55 3 21 4.46 21 6.25v5.77c-.46-.3-.97-.53-1.5-.7V8.5h-15v9.25c0 .97.78 1.75 1.75 1.75h5.06c.18.53.42 1.04.71 1.5H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm-.77 11.05l-.04.1-.55 1.78h-1.8c-.54 0-.78.67-.42 1.04l.07.06 1.46 1.1-.56 1.8c-.16.52.38.97.82.72l.08-.05 1.46-1.1 1.46 1.1c.43.33 1-.07.92-.58l-.02-.1-.56-1.78 1.46-1.1c.43-.33.25-1.02-.25-1.1H18.61l-.55-1.8a.58.58 0 00-1.08-.1zm.77-9.55H6.25c-.97 0-1.75.78-1.75 1.75V7h15v-.75c0-.97-.78-1.75-1.75-1.75z" fill={primaryFill} /></svg>;
};

export default CalendarStar24Regular;