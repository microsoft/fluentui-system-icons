import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier12X28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.97 8.03c.32.1.53.4.53.72v10.5a.75.75 0 11-1.5 0v-8.3c-.45.47-1.05.95-1.86 1.44a.75.75 0 01-.78-1.28c1.53-.92 2.08-1.75 2.58-2.5.07-.1.13-.2.2-.28a.75.75 0 01.83-.3zm6.52 2.87v-.03l.05-.15c.06-.13.15-.3.3-.49.28-.33.82-.73 1.91-.73.96 0 1.56.31 1.9.75.35.44.53 1.14.36 2.12-.1.58-.39.93-.84 1.22-.38.24-.8.4-1.3.61l-.63.26c-.74.32-1.57.75-2.2 1.5A4.9 4.9 0 0011 19.26a.75.75 0 00.75.75h6a.75.75 0 100-1.5h-5.2c.1-.73.34-1.22.63-1.57.4-.48.96-.8 1.65-1.09l.5-.2c.54-.22 1.15-.47 1.65-.79a3.18 3.18 0 001.5-2.22 4.11 4.11 0 00-.65-3.31C17.13 8.44 16.04 8 14.75 8c-1.53 0-2.5.6-3.06 1.27a3.33 3.33 0 00-.67 1.32v.02a.75.75 0 001.47.29zm8.79 3.32a.75.75 0 10-1.06 1.06L21.94 17l-1.72 1.72a.75.75 0 001.06 1.06L23 18.06l1.72 1.72a.75.75 0 101.06-1.06L24.06 17l1.72-1.72a.75.75 0 00-1.06-1.06L23 15.94l-1.72-1.72zM9.5 19.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /></svg>;
};

export default Multiplier12X28Regular;