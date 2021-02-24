import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRepeatAllOff16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.78 2.09l.07.06 11 11a.5.5 0 01-.63.76l-.07-.06-2.02-2.01c-.29.08-.59.14-.9.15L10 12H6.7l1.16 1.15c.17.17.19.44.05.64l-.05.07a.5.5 0 01-.64.05l-.07-.05-2-2a.5.5 0 01-.06-.64l.06-.07 2-2a.5.5 0 01.76.63l-.05.07L6.7 11H10l.28-.01-5.65-5.66a3 3 0 00-.77 4.77.5.5 0 01-.71.7 3.98 3.98 0 01.74-6.2L2.15 2.85a.5.5 0 01.63-.76zm9.72 2.96a.5.5 0 01.32.12l.07.07a3.99 3.99 0 010 5.53l-.72-.7a2.99 2.99 0 00-.04-4.18.5.5 0 01.37-.84zm-4.35-2.9a.5.5 0 01.63-.06l.07.05 2 2 .06.08a.5.5 0 010 .56l-.05.07L8.9 6.8l-.71-.7L9.3 5H7.1l-1-1h3.2L8.14 2.85l-.06-.07a.5.5 0 01.06-.64z" fill={primaryFill} /></svg>;
};

export default ArrowRepeatAllOff16Regular;