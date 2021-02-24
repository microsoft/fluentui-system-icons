import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ContentSettings32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 9a5 5 0 015-5h14a5 5 0 015 5v5a9.99 9.99 0 00-2-1.17V10H6v13a3 3 0 003 3h3.83c.32.72.71 1.39 1.17 2H9a5 5 0 01-5-5V9zm2.17-1h19.66A3 3 0 0023 6H9a3 3 0 00-2.83 2zM16 13v1c-.75.57-1.43 1.24-2 2v-2h-4v8h2c0 .68.07 1.35.2 2H9a1 1 0 01-1-1V13a1 1 0 011-1h6a1 1 0 011 1zm4.64 17.2l.03.15a7.97 7.97 0 002.66 0l.03-.16a4 4 0 015.02-2.9c.56-.71 1-1.53 1.31-2.41a4 4 0 010-5.76c-.3-.88-.75-1.7-1.31-2.41a4 4 0 01-5.02-2.9l-.03-.16a7.97 7.97 0 00-2.66 0l-.03.16a4 4 0 01-5.02 2.9c-.56.71-1 1.53-1.31 2.41a4 4 0 010 5.76c.3.88.75 1.7 1.31 2.41a4 4 0 015.02 2.9zm3.59-8.2c0 1.27-1 2.3-2.23 2.3a2.27 2.27 0 01-2.23-2.3c0-1.27 1-2.3 2.23-2.3a2.27 2.27 0 012.23 2.3z" fill={primaryFill} /></svg>;
};

export default ContentSettings32Regular;