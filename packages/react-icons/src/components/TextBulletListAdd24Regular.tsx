import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBulletListAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 5.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z" fill={primaryFill} /><path d="M3.25 9a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /><path d="M6.75 11a.75.75 0 01-.1-1.5h14.6a.75.75 0 01.1 1.5H6.75z" fill={primaryFill} /><path d="M3.25 14a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /><path d="M6.75 14.5h4.98c-.24.47-.43.97-.56 1.5H6.75a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /><path d="M6.75 4.5h14.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 110-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 110 1H18z" fill={primaryFill} /></svg>;
};

export default TextBulletListAdd24Regular;