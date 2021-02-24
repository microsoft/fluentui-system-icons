import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DesktopArrowRight20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35A.5.5 0 0017 5.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 5H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /><path d="M17 13v-2.6c.36-.18.7-.4 1-.66V13a2 2 0 01-2 2h-3v2h1.5a.5.5 0 010 1h-9a.5.5 0 010-1H7v-2H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2h6.26c-.26.3-.48.64-.66 1H4a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1zm-5 4v-2H8v2h4z" fill={primaryFill} /></svg>;
};

export default DesktopArrowRight20Regular;