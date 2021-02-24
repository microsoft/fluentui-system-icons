import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DesktopArrowRight16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35A.5.5 0 0013 5.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L11.29 5H8.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /><path d="M10.5 11h1.49a1 1 0 00.89-.54c.4-.2.77-.43 1.11-.71v.24a2 2 0 01-2 2h-2V13h1.5a.5.5 0 110 1H4.5a.5.5 0 110-1H6v-1H4a2 2 0 01-2-2V4c0-1.11.89-2 2-2h2.26c-.25.3-.47.64-.66 1H4a1 1 0 00-1 1v6a1 1 0 001 1h6.5zM9 12H7v1h2v-1z" fill={primaryFill} /></svg>;
};

export default DesktopArrowRight16Regular;