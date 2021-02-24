import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenFolder24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3h10.5c2 0 3.64 1.57 3.75 3.55v4.7a.75.75 0 01-1.49.1v-4.6c0-1.19-.93-2.16-2.1-2.24h-.16L6.75 4.5c-1.18 0-2.15.9-2.25 2.06v10.69c0 1.2.93 2.17 2.1 2.25h4.65a.75.75 0 01.1 1.5h-4.6c-2 0-3.64-1.57-3.75-3.55V6.55A3.75 3.75 0 016.55 3l.2-.01zm3.2 6H16a1 1 0 01.11 2h-3.69l6.54 6.54a1 1 0 01.08 1.32l-.08.1a1 1 0 01-1.32.08l-.1-.08L11 12.4v3.6a1 1 0 01-.88.99H10a1 1 0 01-1-.88v-6.2l.02-.1v-.05l.03-.07.03-.1.07-.12a1 1 0 01.14-.19l.11-.1.12-.07.1-.05.1-.03.1-.02.12-.02H16 9.94z" fill={primaryFill} /></svg>;
};

export default OpenFolder24Filled;