import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Scratchpad24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.78 2C19.03 2 20 3 20 4.26v4a4.76 4.76 0 00-1.5-1.6v-2.4c0-.4-.3-.74-.72-.74H6.26a.75.75 0 00-.75.75l-.01 15.5c0 .41.34.74.76.74H13.3c.54.26 1.07.39 1.2.43a2 2 0 00.16 1.07H6.26C5 22 4 21 4 19.76V4.26C4 3 5.02 2 6.27 2h11.52zm3.47 11c.38 0 .7.28.74.65l.01.1v.75a5.64 5.64 0 01-5 5.6v1.15a.75.75 0 01-1.5.1V20.1a5.65 5.65 0 01-5-5.36v-.99a.75.75 0 011.5-.1v.85c0 2.35 1.9 4.15 4.25 4.15 2.28 0 4.13-1.7 4.24-3.94l.01-.21v-.75c0-.41.34-.75.75-.75zm-5-6c1.8 0 3.25 1.46 3.25 3.25v4a3.25 3.25 0 11-6.5 0v-4C13 8.45 14.46 7 16.25 7zm0 1.5c-.97 0-1.75.78-1.75 1.75v4a1.75 1.75 0 103.5 0v-4c0-.97-.78-1.75-1.75-1.75zM9.67 13a.66.66 0 00-.12.25c-.03.1-.05.25-.05.45v.8H8.25a.75.75 0 01-.1-1.5h1.52zm-1.42-3H12v1.5H8.25a.75.75 0 01-.1-1.5h.1zm5.25-3c-.3.26-.53.48-.65.65-.09.12-.2.3-.33.54l-.17.31h-4.1a.75.75 0 01-.1-1.5h5.35z" fill={primaryFill} /></svg>;
};

export default Scratchpad24Regular;