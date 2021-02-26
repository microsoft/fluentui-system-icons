import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MathFormatLinear24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.99 4.18a.75.75 0 00-.98 0l-1.75 1.5a.75.75 0 10.98 1.14l1.26-1.08 1.26 1.08a.75.75 0 00.98-1.14l-1.75-1.5zm2.57 5.36a.75.75 0 011.15.22l1.2 2.27-3.69 3.69a.75.75 0 101.06 1.06l3.36-3.36 1.32 2.52a2.25 2.25 0 003.46.66l.32-.28a.75.75 0 10-.98-1.14l-.32.28a.75.75 0 01-1.15-.22l-1.54-2.93 3.03-3.03a.75.75 0 00-1.06-1.06l-2.7 2.7-.98-1.86a2.25 2.25 0 00-3.46-.66l-.32.28a.75.75 0 10.98 1.14l.32-.28zm-9.97 3.93c.92-.01 1.89-.07 2.76-.25a4.15 4.15 0 002.71-1.63c.57-.86.58-1.88.06-2.64-.53-.77-1.51-1.12-2.6-.87-.46.1-1.25.34-2.08 1A6.88 6.88 0 002.3 12.5a4.55 4.55 0 000 3.2 2.95 2.95 0 001.96 1.67c1.65.45 3.73-.28 5.06-1.95a.75.75 0 00-1.18-.93c-1.02 1.28-2.5 1.7-3.48 1.43-.46-.13-.8-.4-1-.82a2.68 2.68 0 01-.06-1.63zm4.3-3.67c.13.2.19.56-.08.96-.31.48-.9.8-1.78 1-.58.12-1.23.17-1.92.2.39-.83.85-1.36 1.28-1.7a3.52 3.52 0 011.46-.72c.6-.13.9.08 1.03.26z" fill={primaryFill} /></svg>;
};

export default MathFormatLinear24Regular;