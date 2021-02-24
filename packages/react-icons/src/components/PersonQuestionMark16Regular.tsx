import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonQuestionMark16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 9c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5C1 9.67 1.67 9 2.5 9h7zm0 1h-7a.5.5 0 00-.5.5v.5c0 1.44 1.43 3 4 3 2.57 0 4-1.56 4-3v-.5a.5.5 0 00-.5-.5zM13 7a.75.75 0 110 1.5.75.75 0 010-1.5zM6 2.5A2.75 2.75 0 116 8a2.75 2.75 0 010-5.5zm0 1A1.75 1.75 0 106 7a1.75 1.75 0 000-3.5zM13 1a2 2 0 012 2c0 .73-.21 1.14-.75 1.7l-.27.28c-.38.4-.48.6-.48 1.02a.5.5 0 01-1 0c0-.73.21-1.14.75-1.7l.27-.28c.38-.4.48-.6.48-1.02a1 1 0 10-2 0 .5.5 0 01-1 0c0-1.1.9-2 2-2z" fill={primaryFill} /></svg>;
};

export default PersonQuestionMark16Regular;