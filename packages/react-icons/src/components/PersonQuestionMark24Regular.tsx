import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonQuestionMark24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 7.75a.62.62 0 100 1.25.62.62 0 000-1.25zm0-5.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 101-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.05.35-.22.56l-.1.12-.1.11-.26.3-.14.15c-.38.46-.53.8-.53 1.31a.5.5 0 101 0c0-.2.06-.36.24-.59l.08-.1.1-.12.27-.29.14-.15c.37-.45.52-.79.52-1.3 0-1.1-.82-1.95-1.85-1.95zm-5.48.13c-.3.46-.53.97-.7 1.5H4.24a.75.75 0 00-.75.75v.58c0 .53.2 1.05.54 1.46C5.3 19.75 7.26 20.5 10 20.5c.6 0 1.16-.03 1.68-.1.25.49.55.95.91 1.36-.8.16-1.66.24-2.59.24-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 01-.9-2.43v-.58C2 15 3.01 14 4.25 14h7.77zM10 2a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill={primaryFill} /></svg>;
};

export default PersonQuestionMark24Regular;