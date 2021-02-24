import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier15X28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.97 8.03c.32.1.53.4.53.72v10.5a.75.75 0 01-1.5 0v-8.3c-.45.47-1.05.95-1.86 1.44a.75.75 0 01-.78-1.28c1.53-.92 2.08-1.75 2.58-2.5.07-.1.13-.2.2-.28a.75.75 0 01.83-.3zm5.78.68c.02-.4.35-.71.75-.71h5.25a.75.75 0 010 1.5h-4.54l-.16 2.9 1.68-.2a4.04 4.04 0 11.48 8.05h-.3a4.35 4.35 0 01-3.3-1.52l-.43-.5a.75.75 0 111.14-.97l.42.5c.54.63 1.33.99 2.16.99h.3a2.54 2.54 0 10-.3-5.06l-2.56.3a.75.75 0 01-.84-.78l.25-4.5zm9.53 5.51a.75.75 0 10-1.06 1.06L21.94 17l-1.72 1.72a.75.75 0 101.06 1.06L23 18.06l1.72 1.72a.75.75 0 101.06-1.06L24.06 17l1.72-1.72a.75.75 0 00-1.06-1.06L23 15.94l-1.72-1.72zM8.75 20a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
};

export default Multiplier15X28Regular;