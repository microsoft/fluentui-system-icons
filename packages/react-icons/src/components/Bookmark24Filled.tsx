import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bookmark24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.19 21.85a.75.75 0 01-1.19-.6v-15C5 4.45 6.46 3 8.25 3h7.5C17.55 3 19 4.45 19 6.25v15c0 .6-.7.96-1.19.6l-5.8-4.18-5.82 4.18z" fill={primaryFill} /></svg>;
};

export default Bookmark24Filled;