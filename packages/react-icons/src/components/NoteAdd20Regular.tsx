import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NoteAdd20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H6V3.5z" fill={primaryFill} /><path d="M14 4h-3.2c-.1-.35-.24-.68-.4-1H14a3 3 0 013 2.82v4.56a2 2 0 01-.47 1.28l-.12.13-4.62 4.62a2 2 0 01-1.24.58l-.17.01H6a3 3 0 01-3-2.82V10.4c.32.16.65.3 1 .4V14a2 2 0 001.85 2H10v-3a3 3 0 012.82-3H16V6a2 2 0 00-1.85-2H14zm1.78 7H13a2 2 0 00-2 1.85V15.78l.09-.07 4.62-4.62a1 1 0 00.07-.09z" fill={primaryFill} /></svg>;
};

export default NoteAdd20Regular;