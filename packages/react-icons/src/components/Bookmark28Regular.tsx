import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bookmark28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6.75C6 4.95 7.46 3.5 9.25 3.5h9.5c1.8 0 3.25 1.46 3.25 3.25v18a.75.75 0 01-1.2.6L14 20.19l-6.8 5.16a.75.75 0 01-1.2-.6v-18zM9.25 5c-.97 0-1.75.78-1.75 1.75v16.49l6.05-4.59c.26-.2.64-.2.9 0l6.05 4.59V6.75c0-.97-.78-1.75-1.75-1.75h-9.5z" fill={primaryFill} /></svg>;
};

export default Bookmark28Regular;