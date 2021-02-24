import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AccessibilityCheckmark24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm8.34 4.52a2.01 2.01 0 00-2.6-1.26l-1.61.6a.75.75 0 00-.42.38 4.09 4.09 0 01-7.39.01.75.75 0 00-.41-.38l-1.63-.6A2 2 0 004.82 9L8 10.31v3.15l-1.97 5.71A1.96 1.96 0 009.7 20.5l1.31-3.52a6.5 6.5 0 014.98-5.8v-.86l3.2-1.3a2.01 2.01 0 001.14-2.5zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.15-2.35a.5.5 0 00-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
};

export default AccessibilityCheckmark24Filled;