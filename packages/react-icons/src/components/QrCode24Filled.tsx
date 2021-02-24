import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const QrCode24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 6H6v2h2V6z" fill={primaryFill} /><path d="M3 5.5A2.5 2.5 0 015.5 3h3A2.5 2.5 0 0111 5.5v3A2.5 2.5 0 018.5 11h-3A2.5 2.5 0 013 8.5v-3zM5.5 5a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3z" fill={primaryFill} /><path d="M6 16h2v2H6v-2z" fill={primaryFill} /><path d="M3 15.5A2.5 2.5 0 015.5 13h3a2.5 2.5 0 012.5 2.5v3A2.5 2.5 0 018.5 21h-3A2.5 2.5 0 013 18.5v-3zm2.5-.5a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3z" fill={primaryFill} /><path d="M18 6h-2v2h2V6z" fill={primaryFill} /><path d="M15.5 3A2.5 2.5 0 0013 5.5v3a2.5 2.5 0 002.5 2.5h3A2.5 2.5 0 0021 8.5v-3A2.5 2.5 0 0018.5 3h-3zM15 5.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3z" fill={primaryFill} /><path d="M13 13h2.75v2.75H13V13z" fill={primaryFill} /><path d="M18.25 15.75h-2.5v2.5H13V21h2.75v-2.75h2.5V21H21v-2.75h-2.75v-2.5z" fill={primaryFill} /><path d="M18.25 15.75V13H21v2.75h-2.75z" fill={primaryFill} /></svg>;
};

export default QrCode24Filled;