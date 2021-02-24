import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextChangeCase20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 3.5c.2 0 .39.14.46.34l3.65 10.5a.5.5 0 01-.95.32L15.74 12h-4.76l-1.01 2.68a.5.5 0 01-.94-.36l1.24-3.27V11h.02l2.73-7.18a.5.5 0 01.47-.32zm-.04 1.96L11.36 11h4.03l-1.93-5.54z" fill={primaryFill} /><path d="M5.67 8.7h.19c1.3.07 2.08.82 2.14 2.04v3.8a.5.5 0 01-.43.5H7.5a.5.5 0 01-.5-.43v-.14c-.66.38-1.27.57-1.83.57A2.09 2.09 0 013 12.87c0-1.15.8-2 2.1-2.16a5.02 5.02 0 011.9.14c0-.74-.37-1.1-1.2-1.14-.63-.04-1.08.05-1.35.24a.5.5 0 11-.57-.82c.44-.3 1.03-.44 1.79-.43zM7 11.92l-.2-.06a4.04 4.04 0 00-1.57-.13c-.82.1-1.23.53-1.23 1.17 0 .73.47 1.16 1.17 1.16.45 0 1-.2 1.66-.64l.17-.11v-1.4z" fill={primaryFill} /></svg>;
};

export default TextChangeCase20Regular;