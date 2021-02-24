import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Key24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 7a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill={primaryFill} /><path d="M15.5 2.05A6.55 6.55 0 009.06 9.7c.02.1-.02.2-.07.25l-6.24 6.23c-.51.52-.8 1.22-.8 1.95v2.17c0 .97.78 1.75 1.75 1.75h2.5c.97 0 1.75-.78 1.75-1.75v-1.25H9.7c.69 0 1.25-.56 1.25-1.25v-1.75h1.75c.67 0 1.22-.54 1.25-1.2a6.55 6.55 0 008.1-6.35 6.47 6.47 0 00-6.55-6.45zM10.45 8.6a5.05 5.05 0 015.05-5.05c2.8 0 5.05 2.18 5.05 4.95a5.05 5.05 0 01-7.06 4.61.75.75 0 00-1.04.69v.75H10.7c-.7 0-1.25.56-1.25 1.25v1.75H7.7c-.7 0-1.25.56-1.25 1.25v1.5c0 .14-.11.25-.25.25H3.7a.25.25 0 01-.25-.25v-2.17c0-.33.13-.65.37-.89l6.23-6.23c.42-.42.58-1 .49-1.57-.06-.3-.1-.58-.1-.84z" fill={primaryFill} /></svg>;
};

export default Key24Regular;