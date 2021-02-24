import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const QuizNew24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v6.27c-.46-.3-.97-.53-1.5-.7V5.74c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h5.56c.18.53.42 1.04.71 1.5H5.75A2.75 2.75 0 013 18.25V5.75z" fill={primaryFill} /><path d="M6.75 13.5h5.63a6.5 6.5 0 00-.88 1.5H6.75a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M10.25 18.5h-3.5a.75.75 0 010-1.5h3.5a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M10 5c.3 0 .58.18.7.46l2.24 5.5a.75.75 0 01-1.39.57l-.42-1.03H8.87l-.43 1.03a.75.75 0 01-1.38-.56l2.25-5.5A.75.75 0 0110 5zm-.52 4h1.04L10 7.73 9.48 9z" fill={primaryFill} /><path d="M15.75 5c.41 0 .75.33.75.75V7h1.25a.75.75 0 010 1.5H16.5v1.25a.75.75 0 01-1.5 0V8.5h-1.25a.75.75 0 010-1.5H15V5.75c0-.42.34-.75.75-.75z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 110-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 110 1H18z" fill={primaryFill} /></svg>;
};

export default QuizNew24Regular;