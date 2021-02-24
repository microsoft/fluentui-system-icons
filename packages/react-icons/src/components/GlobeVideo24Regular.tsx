import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GlobeVideo24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 019.99 10.52c-.11.04-.22.1-.32.17l-.96.64a2.5 2.5 0 00-.26-.4 8.58 8.58 0 00-.19-2.93h-3.35c.06.65.1 1.32.1 2h-1.5c0-.69-.04-1.36-.11-2H8.6a18.97 18.97 0 00.14 5H11v1.5H9.06c.46 1.7 1.16 3 1.94 3.61v.39c0 .56.18 1.07.5 1.49a10 10 0 01.5-20zM7.5 16.5H4.8a8.53 8.53 0 004.09 3.41c-.52-.82-.95-1.84-1.27-3.01l-.1-.4zM7.1 10H3.73v.02a8.52 8.52 0 00.3 4.98h3.18a20.3 20.3 0 01-.13-5zm1.78-5.91h-.02A8.53 8.53 0 004.25 8.5H7.3c.31-1.75.86-3.28 1.58-4.41zm3.12-.6l-.12.01c-1.26.12-2.48 2.12-3.05 5h6.34c-.56-2.87-1.78-4.87-3.04-5H12zm3.12.6l.1.17A12.64 12.64 0 0116.7 8.5h3.05a8.53 8.53 0 00-4.34-4.29l-.29-.12z" fill={primaryFill} /><path d="M12 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v.5l2.22-1.48a.5.5 0 01.78.41v7.14a.5.5 0 01-.78.41L20 20v.5c0 .83-.67 1.5-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5v-6z" fill={primaryFill} /></svg>;
};

export default GlobeVideo24Regular;