import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PuzzleCube48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 17v18.75C6 39.2 8.8 42 12.25 42h23.5C39.2 42 42 39.2 42 35.75v-23.5C42 8.8 39.2 6 35.75 6H17v11H6zm2.5 11.5v-9H17v9H8.5zm0 7.25V31H17v8.5h-4.75a3.75 3.75 0 01-3.75-3.75zm20 3.75h-9V31h9v8.5zm7.25 0H31V31h8.5v4.75a3.75 3.75 0 01-3.75 3.75zm3.75-20v9H31v-9h8.5zm0-7.25V17H31V8.5h4.75a3.75 3.75 0 013.75 3.75zm-20-3.75h9V17h-9V8.5zm9 11v9h-9v-9h9z" fill={primaryFill} /></svg>;
};

export default PuzzleCube48Regular;