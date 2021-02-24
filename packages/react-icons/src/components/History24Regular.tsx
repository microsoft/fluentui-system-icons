import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const History24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a9 9 0 11-8.96 8.18.75.75 0 111.5.14 7.6 7.6 0 001.1 4.65A7.54 7.54 0 0012 19.5a7.5 7.5 0 10-6-12h2.75a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.74-.65l-.01-.1v-4.5a.75.75 0 011.5-.1v2.7A8.99 8.99 0 0112 3zm-.75 4c.38 0 .7.28.74.65l.01.1V12h2.25a.75.75 0 01.1 1.5h-3.1a.75.75 0 01-.74-.65l-.01-.1v-5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default History24Regular;