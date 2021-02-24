import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Hdr24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 3.5c1.8 0 3.25 1.46 3.25 3.25v10.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 17.25V6.75C2 4.95 3.46 3.5 5.25 3.5h13.5zM8.38 9a.63.63 0 00-.62.53v1.86H6.26V9.54a.63.63 0 00-1.24 0V14.48a.63.63 0 001.24 0v-1.84h1.48v1.73l.01.1a.63.63 0 001.24 0V9.51A.63.63 0 008.38 9zm8.82.02H15.53a.63.63 0 00-.52.52V14.48l.03.1c.18.59 1.11.56 1.21-.1v-1.86H17l.8 1.99.05.09a.63.63 0 001.14-.46l-.03-.1-.74-1.83a1.8 1.8 0 00-.87-3.29h-.15zM11.38 9h-.85a.63.63 0 00-.52.52l-.01.1v4.84c.05.26.26.48.52.52h1.02A2.63 2.63 0 0014 12.54v-1.07A2.63 2.63 0 0011.54 9h-.16zm0 1.25c.71 0 1.3.54 1.36 1.24l.01.13v.88a1.38 1.38 0 01-1.24 1.23h-.26v-3.48h.13zm4.87 0h.95l.1.01a.55.55 0 010 1.1h-1.04v-1.1z" fill={primaryFill} /></svg>;
};

export default Hdr24Filled;