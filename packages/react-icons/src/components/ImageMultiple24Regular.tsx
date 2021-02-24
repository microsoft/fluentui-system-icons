import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ImageMultiple24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 9a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /><path d="M6.25 3A3.25 3.25 0 003 6.25v9c0 1.8 1.46 3.25 3.25 3.25h9c1.8 0 3.25-1.46 3.25-3.25v-9c0-1.8-1.46-3.25-3.25-3.25h-9zM4.5 6.25c0-.97.78-1.75 1.75-1.75h9c.97 0 1.75.78 1.75 1.75v9c0 .23-.04.45-.13.65l-4.58-4.29c-.87-.8-2.21-.8-3.08 0l-4.58 4.3c-.09-.2-.13-.43-.13-.66v-9zm6.76 6.46l4.5 4.21c-.16.05-.33.08-.51.08h-9c-.18 0-.35-.03-.52-.08l4.5-4.21a.75.75 0 011.03 0z" fill={primaryFill} /><path d="M8.75 21c-1.15 0-2.16-.6-2.74-1.5h9.74a3.75 3.75 0 003.75-3.75V6.01c.9.58 1.5 1.59 1.5 2.74v7c0 2.9-2.35 5.25-5.25 5.25h-7z" fill={primaryFill} /></svg>;
};

export default ImageMultiple24Regular;