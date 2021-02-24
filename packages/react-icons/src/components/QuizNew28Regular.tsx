import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const QuizNew28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.75A2.75 2.75 0 015.75 3h16.5A2.75 2.75 0 0125 5.75v8.75a7.49 7.49 0 00-1.5-.88V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h7.87c.24.54.53 1.04.88 1.5H5.75A2.75 2.75 0 013 22.25V5.75z" fill={primaryFill} /><path d="M6.75 16h7.75a7.5 7.5 0 00-.88 1.5H6.75a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M6 20.75c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M11.5 6c.3 0 .57.18.7.46l2.74 6.5a.75.75 0 11-1.38.58l-.44-1.04H9.88l-.44 1.04a.75.75 0 11-1.38-.58l2.75-6.5a.75.75 0 01.7-.46zm-.98 5h1.96l-.98-2.32-.98 2.32z" fill={primaryFill} /><path d="M17.75 6c.41 0 .75.34.75.75V8h1.25a.75.75 0 010 1.5H18.5v1.25a.75.75 0 01-1.5 0V9.5h-1.25a.75.75 0 010-1.5H17V6.75c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-6-4a.5.5 0 00-1 0V20h-3.5a.5.5 0 000 1H20v3.5a.5.5 0 001 0V21h3.5a.5.5 0 000-1H21v-3.5z" fill={primaryFill} /></svg>;
};

export default QuizNew28Regular;