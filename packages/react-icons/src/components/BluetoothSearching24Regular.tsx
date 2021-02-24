import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BluetoothSearching24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 9.6V3.76c0-.64.76-.97 1.23-.58l.08.07 4.7 5.1c.27.3.27.74.01 1.02l-.07.07L12.87 12l3.08 2.56c.3.26.35.7.13 1l-.06.09-4.71 5.1a.75.75 0 01-1.3-.4v-5.97l-1.13.94a.75.75 0 01-1.04-1.08l.08-.07L10 12.43v-.87L7.92 9.83A.75.75 0 018.8 8.6l.1.06 1.11.94V3.75v5.86zm1.7 3.37l-.2.16v5.2l2.88-3.12-2.68-2.24zm7.57-5.6a.75.75 0 011.06.09 6.98 6.98 0 01-.01 9.09.75.75 0 01-1.14-.98 5.48 5.48 0 000-7.14.75.75 0 01.09-1.06zm-2 1.81a.75.75 0 011.06.09 4.2 4.2 0 010 5.46.75.75 0 01-1.14-.97 2.7 2.7 0 000-3.52.75.75 0 01.09-1.06zm-5.77-3.5v5.18l.2.16 2.68-2.23-2.88-3.12z" fill={primaryFill} /></svg>;
};

export default BluetoothSearching24Regular;