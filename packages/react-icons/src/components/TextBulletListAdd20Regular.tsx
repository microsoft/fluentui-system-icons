import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBulletListAdd20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M6 4.5c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M6.5 8a.5.5 0 000 1h11a.5.5 0 000-1h-11z" fill={primaryFill} /><path d="M9.2 13c.1-.35.24-.68.4-1H6.5a.5.5 0 000 1h2.7z" fill={primaryFill} /><path d="M3 13.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M3 9.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
};

export default TextBulletListAdd20Regular;