import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AirplaneTakeOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.32 8.4l-.78-1.12a2.1 2.1 0 013.05-2.81l2.58 2.09c.31-.33.68-.68 1.1-1a4.7 4.7 0 012.42-1.06c2.24-.17 3.91 1.25 4.86 2.33.49.56.58 1.27.37 1.88-.2.6-.69 1.1-1.34 1.32l-5.37 1.85-3.16 4.22a2.25 2.25 0 01-4-1.78l.25-1.28-2.53.54A2.28 2.28 0 013 11.35V7.7a1.7 1.7 0 013.18-.8l.96 1.76 1.18-.24zm.46-1.97l1.13 1.65 1.9-.4c.09-.02.17-.05.26-.09L9.65 5.63a.6.6 0 00-.87.8zM16.81 6c-.5.04-1.07.32-1.63.75-.55.42-1.03.94-1.36 1.34-.42.5-1 .91-1.7 1.06L6.9 10.23a.75.75 0 01-.8-.37L4.85 7.6a.2.2 0 00-.36.1v3.65c0 .5.46.87.95.77l3.64-.79a.75.75 0 01.9.88l-.47 2.4a.75.75 0 001.33.6l3.3-4.41a.75.75 0 01.36-.26l5.58-1.93a.64.64 0 00.41-.38.4.4 0 00-.08-.41c-.86-.98-2.1-1.94-3.61-1.82z" fill={primaryFill} /><path d="M3.75 19.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /></svg>;
};

export default AirplaneTakeOff24Regular;