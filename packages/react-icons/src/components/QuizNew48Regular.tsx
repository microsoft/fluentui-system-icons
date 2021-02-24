import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const QuizNew48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 6A5.25 5.25 0 006 11.25v25.5C6 39.65 8.35 42 11.25 42h13.27c-.5-.78-.92-1.62-1.25-2.5H11.25a2.75 2.75 0 01-2.75-2.75v-25.5a2.75 2.75 0 012.75-2.75h25.5a2.75 2.75 0 012.75 2.75v11.39c.88.28 1.72.66 2.5 1.11v-12.5C42 8.35 39.65 6 36.75 6h-25.5z" fill={primaryFill} /><path d="M24.52 28c-.5.78-.92 1.61-1.24 2.5H11.25a1.25 1.25 0 110-2.5h13.27z" fill={primaryFill} /><path d="M33 11.25a1.25 1.25 0 00-2.5 0V14h-2.75a1.25 1.25 0 100 2.5h2.75v2.75a1.25 1.25 0 002.5 0V16.5h2.75a1.25 1.25 0 100-2.5H33v-2.75z" fill={primaryFill} /><path d="M20.65 10.77a1.25 1.25 0 00-2.3 0l-4.76 11.5a1.25 1.25 0 102.32.96l.7-1.71h5.78l.7 1.71a1.25 1.25 0 102.32-.95l-4.76-11.5zm.7 8.25h-3.7l1.85-4.5 1.85 4.5z" fill={primaryFill} /><path d="M10 35.25c0-.69.56-1.25 1.25-1.25h8a1.25 1.25 0 010 2.5h-8c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /><path d="M46.48 35a11 11 0 11-22 0 11 11 0 0122 0zm-10-7a1 1 0 10-2 0v6h-6a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6v-6z" fill={primaryFill} /></svg>;
};

export default QuizNew48Regular;