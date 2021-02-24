import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBulletListSquare24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 8.25a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M10.5 8.25c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M10.5 12c0-.41.34-.75.75-.75h5.5a.75.75 0 110 1.5h-5.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M11.25 15a.75.75 0 100 1.5h5.5a.75.75 0 100-1.5h-5.5z" fill={primaryFill} /><path d="M7.75 13a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M8.75 15.75a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M5.25 3C4.01 3 3 4 3 5.25v13.5C3 19.99 4 21 5.25 21h13.5c1.24 0 2.25-1 2.25-2.25V5.25C21 4.01 20 3 18.75 3H5.25zM4.5 5.25c0-.41.34-.75.75-.75h13.5c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H5.25a.75.75 0 01-.75-.75V5.25z" fill={primaryFill} /></svg>;
};

export default TextBulletListSquare24Regular;