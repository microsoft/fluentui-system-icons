import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenOff20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L4.1 4.81C3.43 5.41 3 6.28 3 7.25v6.5C3 15.55 4.46 17 6.25 17h6.5c.97 0 1.84-.43 2.44-1.1l1.96 1.95a.5.5 0 00.7-.7l-15-15zm11.28 12.68c-.33.4-.82.67-1.38.67h-6.5c-.97 0-1.75-.78-1.75-1.75v-6.5c0-.56.26-1.05.67-1.38l3.95 3.95-.15.15a.75.75 0 101.06 1.06l.15-.15 3.95 3.95z" fill={primaryFill} /><path d="M16 13.88l-1.5-1.5V12a.75.75 0 011.5 0v1.88z" fill={primaryFill} /><path d="M15.5 5.56l-3.9 3.91-1.07-1.06 3.9-3.91h-4.18a.75.75 0 010-1.5h6a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V5.56z" fill={primaryFill} /><path d="M8 5.5h-.38L6.12 4H8a.75.75 0 010 1.5z" fill={primaryFill} /></svg>;
};

export default OpenOff20Filled;