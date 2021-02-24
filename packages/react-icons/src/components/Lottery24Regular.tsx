import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Lottery24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.15 4.72a2.5 2.5 0 00-4.3 0 5.96 5.96 0 00-1.41-.55 4 4 0 017.12 0c-.5.13-.97.31-1.41.55z" fill={primaryFill} /><path d="M9.38 7.44a7.95 7.95 0 011.66-.38 5 5 0 10-6.98 6.98c.07-.57.2-1.13.38-1.66a3.5 3.5 0 014.95-4.95z" fill={primaryFill} /><path d="M19.94 14.04a5 5 0 10-6.98-6.98c.57.07 1.13.2 1.66.38a3.5 3.5 0 014.95 4.95c.18.52.3 1.08.37 1.65z" fill={primaryFill} /><path d="M9.5 13.25c0-.41.34-.75.75-.75h4.25a.75.75 0 01.5 1.31l-.02.02a3.24 3.24 0 00-.26.26 9.55 9.55 0 00-2.25 3.86.75.75 0 11-1.44-.4c.4-1.5 1.15-2.7 1.78-3.54l.01-.01h-2.57a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M12 22a7 7 0 100-14 7 7 0 000 14zm0-1.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11z" fill={primaryFill} /></svg>;
};

export default Lottery24Regular;