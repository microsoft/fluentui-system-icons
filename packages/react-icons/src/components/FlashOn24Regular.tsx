import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlashOn24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.3 14l-1.77 7.07c-.19.74.73 1.25 1.27.7l12-12.5A.75.75 0 0019.24 8h-4.46l1.67-5.01a.75.75 0 00-.71-.99h-7a.75.75 0 00-.72.54l-3 10.5c-.14.48.22.96.72.96h2.54zm4.74-5.49c-.16.49.2.99.71.99h3.74l-8.82 9.2 1.31-5.27a.75.75 0 00-.73-.93h-2.5l2.57-9h5.39l-1.67 5.01z" fill={primaryFill} /></svg>;
};

export default FlashOn24Regular;