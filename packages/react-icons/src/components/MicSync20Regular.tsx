import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicSync20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.2 13A3.02 3.02 0 016 10V5a3 3 0 016 0v4.6c-.36.19-.7.41-1.02.67L11 10V5a2 2 0 10-4 0v5a2 2 0 002.66 1.89c-.19.35-.34.72-.45 1.1z" fill={primaryFill} /><path d="M9 14.65c.02.77.2 1.49.5 2.14v.71a.5.5 0 01-1 0v-2.02a5.5 5.5 0 01-5-5.48.5.5 0 011 0A4.5 4.5 0 009 14.5v.15z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.5-3a.5.5 0 00-.5.5v1.5c0 .28.22.5.5.5H14a.5.5 0 000-1h-.47a1.97 1.97 0 01.94-.25 2 2 0 011.44.59.5.5 0 00.71-.71 3 3 0 00-3.62-.48V12a.5.5 0 00-.5-.5zm.88 5.53a3 3 0 002.62-.18V17a.5.5 0 001 0v-1.5a.5.5 0 00-.5-.5H15a.5.5 0 000 1h.47a1.97 1.97 0 01-.94.25 2 2 0 01-1.44-.59.5.5 0 00-.71.71 3 3 0 001 .66z" fill={primaryFill} /></svg>;
};

export default MicSync20Regular;