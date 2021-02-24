import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Color24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.84 5.86C6.78 1.94 12.87.8 17.2 3.5c4.28 2.66 5.86 7.77 4.1 12.57-1.65 4.54-6.01 6.33-9.16 4.05-1.17-.85-1.63-1.92-1.85-3.66l-.1-.99-.05-.4c-.12-.93-.31-1.35-.7-1.57-.54-.3-.9-.3-1.6-.03l-.35.14-.18.08c-1.01.44-1.69.6-2.54.42l-.2-.05-.17-.04c-2.78-.87-3.2-4.65-.56-8.16zm12.93 4.72a1.25 1.25 0 102.41-.65 1.25 1.25 0 00-2.41.65zm.5 3.49a1.25 1.25 0 102.4-.65 1.25 1.25 0 00-2.4.65zm-2.48-6.5a1.25 1.25 0 102.41-.64 1.25 1.25 0 00-2.41.65zm-.03 9a1.25 1.25 0 102.41-.64 1.25 1.25 0 00-2.41.65zm-3.5-9.96a1.25 1.25 0 102.42-.65 1.25 1.25 0 00-2.42.65z" fill={primaryFill} /></svg>;
};

export default Color24Filled;