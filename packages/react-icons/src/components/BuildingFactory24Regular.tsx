import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingFactory24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.92 4.13A2.25 2.25 0 015.17 2h1.16c1.2 0 2.18.93 2.25 2.13l.83 15.5A2.25 2.25 0 017.17 22H4.33a2.25 2.25 0 01-2.24-2.37l.83-15.5zm2.25-.63c-.4 0-.73.31-.75.71l-.84 15.5c-.02.43.32.79.75.79h2.84c.43 0 .77-.36.75-.8L7.08 4.22a.75.75 0 00-.75-.71H5.17z" fill={primaryFill} /><path d="M9.51 22h10.24c1.24 0 2.25-1 2.25-2.25V6a.75.75 0 00-1.27-.54l-4.98 4.78V6a.75.75 0 00-1.23-.58L9.86 9.28l.1 1.87 4.29-3.56V12a.75.75 0 001.27.54l4.98-4.78v11.99c0 .41-.34.75-.75.75h-1V16c0-.97-.78-1.75-1.75-1.75h-4c-.97 0-1.75.78-1.75 1.75v4.5h-.92a3.25 3.25 0 01-.82 1.5zm7.74-6v4.25h-4.5V16c0-.14.11-.25.25-.25h4c.14 0 .25.11.25.25z" fill={primaryFill} /></svg>;
};

export default BuildingFactory24Regular;