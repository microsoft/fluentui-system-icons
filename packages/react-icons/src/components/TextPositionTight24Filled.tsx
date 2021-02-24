import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextPositionTight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 3.75a1 1 0 000 2h16.5a1 1 0 100-2H3.75z" fill={primaryFill} /><path d="M15.87 9.25a4.27 4.27 0 00-5.87-2A4.27 4.27 0 007.75 11v4.75a1 1 0 001 1 1 1 0 001-1V11a2.32 2.32 0 01.01-.25 2.25 2.25 0 014.49.25v4.75a1 1 0 102 0V11a4.32 4.32 0 00-.38-1.75z" fill={primaryFill} /><path d="M3.75 7.25h4.58c-.57.55-1.01 1.24-1.28 2h-3.3a1 1 0 010-2z" fill={primaryFill} /><path d="M3.75 10.75h3v2h-3a1 1 0 110-2z" fill={primaryFill} /><path d="M3.75 14.25h3v1.5a2 2 0 00.06.5H3.75a1 1 0 110-2z" fill={primaryFill} /><path d="M17.25 15.75a2 2 0 01-.06.5h3.06a1 1 0 100-2h-3v1.5z" fill={primaryFill} /><path d="M20.25 12.75h-3V11v-.25h3a1 1 0 110 2z" fill={primaryFill} /><path d="M20.25 9.25h-3.3a5.25 5.25 0 00-1.28-2h4.58a1 1 0 110 2z" fill={primaryFill} /><path d="M3.75 17.75h16.5a1 1 0 110 2H3.75a1 1 0 110-2z" fill={primaryFill} /></svg>;
};

export default TextPositionTight24Filled;