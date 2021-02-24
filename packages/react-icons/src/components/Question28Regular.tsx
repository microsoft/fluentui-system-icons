import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Question28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4a6 6 0 00-6 6 .75.75 0 001.5 0 4.5 4.5 0 119 0c0 1.38-.3 2.23-.7 2.84a6.53 6.53 0 01-1.63 1.56l-.03.03c-.64.48-1.38 1.05-1.95 1.9-.58.9-.94 2.05-.94 3.67v.25a.75.75 0 001.5 0V20c0-1.38.3-2.23.7-2.84.4-.63.96-1.05 1.63-1.56l.03-.03a7.82 7.82 0 001.95-1.9c.58-.9.94-2.05.94-3.67a6 6 0 00-6-6z" fill={primaryFill} /><path d="M14 25a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default Question28Regular;