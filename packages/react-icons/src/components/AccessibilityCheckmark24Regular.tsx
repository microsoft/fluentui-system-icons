import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AccessibilityCheckmark24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.04 5.5a3 3 0 115.92 0l2.43-.91a2.36 2.36 0 011.77 4.37L16 10.33v.84c-.53.13-1.03.32-1.5.56V9.84c0-.3.18-.57.45-.68l3.6-1.58A.86.86 0 0017.92 6l-4.78 1.79a3 3 0 01-2.3-.02l-4.9-1.82A.85.85 0 005.3 7.5l3.75 1.65c.27.12.45.4.45.69v3.73c0 .09-.01.17-.04.25L7.54 19.4a.82.82 0 001.54.55l1.65-4.53c.18-.48.55-.76.97-.85a6.47 6.47 0 00-.58 4.17l-.63 1.72a2.32 2.32 0 01-4.37-1.55L8 13.46v-3.12L4.7 8.88a2.35 2.35 0 011.76-4.35l2.58.96zM10.5 5c0 .61.37 1.14.9 1.37.38.14.8.15 1.18.01A1.5 1.5 0 1010.5 5zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.15-2.35a.5.5 0 00-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
};

export default AccessibilityCheckmark24Regular;