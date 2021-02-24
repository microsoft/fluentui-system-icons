import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentCopy48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 10.38v23.37a6.75 6.75 0 006.75 6.75h15.37a4.25 4.25 0 01-3.87 2.5h-11.5A9.25 9.25 0 019 33.75v-19.5c0-1.72 1.03-3.2 2.5-3.87zM25.76 5c1.12 0 2.2.45 3 1.24l9 9c.8.8 1.24 1.88 1.24 3v15.51C39 36.1 37.1 38 34.75 38h-16.5A4.25 4.25 0 0114 33.75V9.25C14 6.9 15.9 5 18.25 5h7.5zM25 7.5h-6.75c-.97 0-1.75.78-1.75 1.75v24.5c0 .97.78 1.75 1.75 1.75h16.5c.97 0 1.75-.78 1.75-1.75V19h-7.25A4.25 4.25 0 0125 14.96V7.5zm10.48 9L27.5 8.52v6.23c0 .92.7 1.67 1.6 1.74l.15.01h6.23z" fill={primaryFill} /></svg>;
};

export default DocumentCopy48Regular;