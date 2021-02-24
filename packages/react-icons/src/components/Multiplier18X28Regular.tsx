import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier18X28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.97 8.03c.32.1.53.4.53.72v10.5a.75.75 0 01-1.5 0v-8.3c-.45.47-1.05.95-1.86 1.44a.75.75 0 01-.78-1.28c1.53-.92 2.08-1.75 2.58-2.5.07-.1.13-.2.2-.28a.75.75 0 01.83-.3zM18.5 11a2.8 2.8 0 01-1.05 2.18 3.8 3.8 0 011.8 3.2c0 2.19-1.9 3.87-4.13 3.87-2.22 0-4.12-1.68-4.12-3.88a3.8 3.8 0 011.8-3.2A2.8 2.8 0 0111.75 11c0-1.76 1.62-3 3.38-3 1.75 0 3.37 1.24 3.37 3zm-3.38-1.5c-1.14 0-1.87.78-1.87 1.5s.73 1.5 1.88 1.5c1.14 0 1.87-.78 1.87-1.5s-.73-1.5-1.88-1.5zm-2.62 6.88c0 1.25 1.12 2.37 2.63 2.37 1.5 0 2.62-1.12 2.62-2.38 0-1.25-1.12-2.37-2.63-2.37-1.5 0-2.62 1.12-2.62 2.38zm7.72-2.16c.3-.3.77-.3 1.06 0L23 15.94l1.72-1.72a.75.75 0 111.06 1.06L24.06 17l1.72 1.72a.75.75 0 11-1.06 1.06L23 18.06l-1.72 1.72a.75.75 0 11-1.06-1.06L21.94 17l-1.72-1.72a.75.75 0 010-1.06zM9.5 19.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /></svg>;
};

export default Multiplier18X28Regular;