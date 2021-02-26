import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ContentSettings32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4a5 5 0 00-5 5v14a5 5 0 005 5h5a9.99 9.99 0 01-1.17-2H9a3 3 0 01-3-3V10h20v2.83c.72.32 1.39.71 2 1.17V9a5 5 0 00-5-5H9zm16.83 4H6.17A3 3 0 019 6h14a3 3 0 012.83 2zM16 14v-1a1 1 0 00-1-1H9a1 1 0 00-1 1v10a1 1 0 001 1h3.2c-.13-.65-.2-1.32-.2-2h-2v-8h4v2c.57-.76 1.25-1.43 2-2zm.68 14.57l.04-.16a4 4 0 00-2.9-5.02c-.12-.9-.1-1.82.08-2.74a4 4 0 002.88-4.99c.7-.6 1.5-1.1 2.34-1.43a4 4 0 005.8 0l.1-.12a7.96 7.96 0 012.3 1.32l-.04.16a4 4 0 002.9 5.02c.12.9.1 1.82-.08 2.74a4 4 0 00-2.88 4.99c-.7.61-1.5 1.1-2.34 1.43a4 4 0 00-5.8 0l-.1.12a7.97 7.97 0 01-2.3-1.32zM20.85 24c1.06.61 2.44.22 3.08-.88.64-1.1.29-2.5-.78-3.12a2.27 2.27 0 00-3.08.89c-.64 1.1-.3 2.5.78 3.1z" fill={primaryFill} /></svg>;
};

export default ContentSettings32Regular;