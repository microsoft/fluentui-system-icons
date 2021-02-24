import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WindowNew20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.52 6a.5.5 0 000 1h2.77l-4.14 4.15a.5.5 0 00.7.7L13 7.71v2.77a.5.5 0 001 0V6.5a.5.5 0 00-.5-.5H9.52z" fill={primaryFill} /><path d="M12.77 17a2.5 2.5 0 002.47-2.11A2.5 2.5 0 0017 12.5v-7A2.5 2.5 0 0014.5 3h-7a2.5 2.5 0 00-2.4 1.8A2.5 2.5 0 003 7.27v6.23A3.5 3.5 0 006.5 17h6.27zM4 7.27c0-.66.42-1.21 1-1.42v6.65A2.5 2.5 0 007.5 15h6.68c-.2.58-.76 1-1.41 1H6.5A2.5 2.5 0 014 13.5V7.27zM7.5 4h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 016 12.5v-7C6 4.67 6.67 4 7.5 4z" fill={primaryFill} /></svg>;
};

export default WindowNew20Regular;