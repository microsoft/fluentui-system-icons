import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DualScreenVibrate24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 6c.92 0 1.67.7 1.75 1.6v9.65c0 .92-.7 1.67-1.6 1.74l-.15.01h-9.5c-.92 0-1.67-.7-1.74-1.6l-.01-.15v-9.5c0-.92.7-1.67 1.6-1.75h9.65zM11.5 7.5H7.25a.25.25 0 00-.24.19L7 7.75v9.5c0 .12.08.22.2.24l.05.01h4.25v-10zm5.25 0H12.5v10h4.25c.12 0 .22-.08.24-.2l.01-.05v-9.5a.25.25 0 00-.2-.25h-.05zm-1.5 7.5a.75.75 0 01.1 1.5h-1.1a.75.75 0 01-.1-1.49h1.1zm-5.5 0a.75.75 0 01.1 1.5h-1.1a.75.75 0 01-.1-1.49h1.1zm11.37-6.96l.06.09.04.1.58 1.45c.34.83.24 1.77-.24 2.51l-.11.16-.15.2c-.23.31-.3.71-.2 1.08l.04.14.58 1.45a.75.75 0 01-1.35.65l-.04-.1-.58-1.45a2.75 2.75 0 01.24-2.51l.1-.16.16-.2c.23-.31.3-.7.2-1.08l-.04-.13-.58-1.46a.75.75 0 011.29-.74zm-17.55 0l.06.09.04.1.58 1.45c.34.83.24 1.77-.24 2.51l-.1.16-.16.2c-.23.31-.3.71-.2 1.08l.04.14.58 1.45a.75.75 0 01-1.35.65l-.04-.1-.58-1.45a2.75 2.75 0 01.24-2.51l.11-.16.15-.2c.23-.31.3-.7.2-1.08l-.04-.13-.58-1.46a.75.75 0 011.29-.74z" fill={primaryFill} /></svg>;
};

export default DualScreenVibrate24Regular;