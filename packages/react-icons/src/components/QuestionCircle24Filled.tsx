import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const QuestionCircle24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 13.5a1 1 0 100 2 1 1 0 000-2zm0-8.75A2.75 2.75 0 009.25 9.5a.75.75 0 001.5.1v-.1a1.25 1.25 0 112.5 0c0 .54-.13.8-.64 1.33l-.14.14c-.88.88-1.22 1.45-1.22 2.53a.75.75 0 001.5 0c0-.54.13-.8.64-1.33l.14-.14c.88-.88 1.22-1.45 1.22-2.53A2.75 2.75 0 0012 6.75z" fill={primaryFill} /></svg>;
};

export default QuestionCircle24Filled;