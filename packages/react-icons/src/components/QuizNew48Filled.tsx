import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const QuizNew48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.64 19.02h3.71l-1.85-4.5-1.86 4.5z" fill={primaryFill} /><path d="M11.25 6A5.25 5.25 0 006 11.25v25.5C6 39.65 8.35 42 11.25 42h13.27a12.94 12.94 0 01-1.24-11.5H11.25a1.25 1.25 0 110-2.5h13.27A12.99 12.99 0 0142 23.75v-12.5C42 8.35 39.65 6 36.75 6h-25.5zM10 35.25c0-.69.56-1.25 1.25-1.25h8a1.25 1.25 0 010 2.5h-8c-.69 0-1.25-.56-1.25-1.25zM19.5 10c.5 0 .96.3 1.15.77l4.76 11.5a1.25 1.25 0 01-2.32.96l-.7-1.71H16.6l-.7 1.71a1.25 1.25 0 11-2.32-.95l4.75-11.5c.2-.48.65-.78 1.16-.78zm12.25 0c.69 0 1.25.56 1.25 1.25V14h2.75a1.25 1.25 0 110 2.5H33v2.75a1.25 1.25 0 01-2.5 0V16.5h-2.75a1.25 1.25 0 110-2.5h2.75v-2.75c0-.7.56-1.25 1.25-1.25z" fill={primaryFill} /><path d="M46.48 35a11 11 0 11-22 0 11 11 0 0122 0zm-10-7a1 1 0 10-2 0v6h-6a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6v-6z" fill={primaryFill} /></svg>;
};

export default QuizNew48Filled;