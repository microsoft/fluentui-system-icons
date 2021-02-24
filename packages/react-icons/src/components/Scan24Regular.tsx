import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Scan24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm3.25 12.33l-.04.07-.06.1-4.76 5.85a8.54 8.54 0 007.26-2l-2.08-4.54c-.1.18-.2.36-.32.52zM4.49 16a8.53 8.53 0 004.34 3.9L11.99 16h-.19l-.13-.01H4.49zM20.13 9.5h-5a4.02 4.02 0 01.3.41l.05.1.04.07c.08.16.16.33.22.5l3.02 6.57a8.46 8.46 0 001.37-7.65zM3.5 12c0 .86.13 1.7.37 2.49h5a4 4 0 01-.23-.32l-.14-.23-3.61-6.6A8.46 8.46 0 003.5 12zm6.52-1.53l-.04.08A2.48 2.48 0 009.5 12c0 1.3.98 2.36 2.24 2.49h.52a2.5 2.5 0 00-.03-4.98h-.43a2.5 2.5 0 00-1.78.96zM12 3.5c-2.4 0-4.55.99-6.1 2.58l2.4 4.38a4 4 0 01.49-.85l3.9-6.08A8.62 8.62 0 0012 3.5zm-.4 4.52a4.05 4.05 0 01.7 0h7.2A8.52 8.52 0 0014.6 3.9l-.3-.09-2.7 4.21z" fill={primaryFill} /></svg>;
};

export default Scan24Regular;