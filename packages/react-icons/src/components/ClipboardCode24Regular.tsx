import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardCode24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2c1.16 0 2.11.88 2.24 2h1.76C18.99 4 20 5 20 6.25v7.46a1.75 1.75 0 00-1.5-1.7V6.26a.75.75 0 00-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 00-.75.75v13.5c0 .41.34.75.75.75h5.38l.81.91c.35.39.82.59 1.3.59H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5zm2.24 2.1l.01.15V4.1zm-2.24-.6h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5z" fill={primaryFill} /><path d="M19 13.75l-.03.21-2.5 8.5a.75.75 0 11-1.44-.42l2.5-8.5a.75.75 0 011.47.21z" fill={primaryFill} /><path d="M11.19 18.5a.75.75 0 010-1l2-2.25a.75.75 0 011.12 1L12.75 18l1.56 1.75a.75.75 0 01-1.12 1l-2-2.25z" fill={primaryFill} /><path d="M19.75 20.81a.75.75 0 01-.06-1.06L21.25 18l-1.56-1.75a.75.75 0 011.12-1l2 2.25c.25.29.25.71 0 1l-2 2.25a.75.75 0 01-1.06.06z" fill={primaryFill} /></svg>;
};

export default ClipboardCode24Regular;