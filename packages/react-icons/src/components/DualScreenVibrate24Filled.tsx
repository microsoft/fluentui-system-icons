import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DualScreenVibrate24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 6v13H7.25c-.92 0-1.67-.7-1.74-1.6l-.01-.15v-9.5c0-.92.7-1.67 1.6-1.74L7.26 6h4.25zm5.25 0c.92 0 1.67.7 1.75 1.6v9.65c0 .92-.7 1.67-1.6 1.74l-.15.01H12.5V6h4.25zm-1.5 9.5h-1.1a.75.75 0 000 1.5H15.35a.75.75 0 00-.1-1.5zm-5.5 0h-1.1a.75.75 0 000 1.5H9.85a.75.75 0 00-.1-1.5zm11.37-7.46l.06.09.04.1.58 1.45c.34.83.24 1.77-.24 2.51l-.11.16-.15.2c-.23.31-.3.7-.2 1.08l.04.14.58 1.45a.75.75 0 01-1.35.65l-.04-.1-.58-1.45a2.75 2.75 0 01.24-2.51l.1-.16.16-.2c.23-.31.3-.7.2-1.08l-.04-.13-.58-1.46a.75.75 0 011.29-.74zm-17.55 0l.06.09.04.1.58 1.45c.34.83.24 1.77-.24 2.51l-.1.16-.16.2c-.23.31-.3.7-.2 1.08l.04.14.58 1.45a.75.75 0 01-1.35.65l-.04-.1-.58-1.45a2.75 2.75 0 01.24-2.51l.11-.16.15-.2c.23-.31.3-.7.2-1.08l-.04-.13-.58-1.46a.75.75 0 011.29-.74z" fill={primaryFill} /></svg>;
};

export default DualScreenVibrate24Filled;