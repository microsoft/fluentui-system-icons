import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Trophy24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.25 2c1.16 0 2.11.88 2.24 2h1.27c.91 0 1.67.7 1.74 1.6v3.15a3.25 3.25 0 01-3.06 3.24l-.2.01a5.76 5.76 0 01-4.74 3.95v1.55h1.75a3.25 3.25 0 013.25 3.07V21.25c0 .38-.28.7-.65.74l-.1.01h-10a.75.75 0 01-.74-.65l-.01-.1v-.5a3.25 3.25 0 013.07-3.24l.18-.01H11v-1.55A5.76 5.76 0 016.27 12h-.02A3.25 3.25 0 013 8.75v-3C3 4.78 3.78 4 4.75 4H6c.13-1.12 1.08-2 2.24-2h7zm3.5 3.5H17.5v4.98c.8-.11 1.43-.76 1.5-1.58V5.75a.25.25 0 00-.19-.24l-.05-.01zM6 5.5H4.75a.25.25 0 00-.25.25v3c0 .88.65 1.61 1.5 1.73V5.5z" fill={primaryFill} /></svg>;
};

export default Trophy24Filled;