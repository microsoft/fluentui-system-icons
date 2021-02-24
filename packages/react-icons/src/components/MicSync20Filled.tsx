import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicSync20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 9.6A5.51 5.51 0 009.2 13 3.02 3.02 0 016 10V5a3 3 0 016 0v4.6z" fill={primaryFill} /><path d="M9.5 17.5v-.7c-.32-.7-.5-1.48-.5-2.3A4.5 4.5 0 014.5 10a.5.5 0 00-1 0 5.5 5.5 0 005 5.48v2.02a.5.5 0 001 0z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.5-3a.5.5 0 00-.5.5v1.5c0 .28.22.5.5.5H14a.5.5 0 000-1h-.47a1.97 1.97 0 01.94-.25 2 2 0 011.44.59.5.5 0 00.71-.71 3 3 0 00-3.62-.48V12a.5.5 0 00-.5-.5zm.88 5.53a3 3 0 002.62-.18V17a.5.5 0 001 0v-1.5a.5.5 0 00-.5-.5H15a.5.5 0 000 1h.47a1.97 1.97 0 01-.94.25 2 2 0 01-1.44-.59.5.5 0 00-.71.71 3 3 0 001 .66z" fill={primaryFill} /></svg>;
};

export default MicSync20Filled;