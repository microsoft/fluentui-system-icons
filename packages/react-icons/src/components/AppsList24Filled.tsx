import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AppsList24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 16C7.2 16 8 16.8 8 17.75v2.5C8 21.22 7.2 22 6.25 22h-2.5C2.78 22 2 21.22 2 20.25v-2.5C2 16.8 2.78 16 3.75 16h2.5zm3.5 2h11.5a.75.75 0 01.1 1.5H9.75a.75.75 0 01-.1-1.5h11.6-11.5zm-3.5-9C7.2 9 8 9.78 8 10.75v2.5C8 14.22 7.2 15 6.25 15h-2.5C2.78 15 2 14.22 2 13.25v-2.5C2 9.78 2.78 9 3.75 9h2.5zm3.5 2h11.5a.75.75 0 01.1 1.5H9.75a.75.75 0 01-.1-1.5h11.6-11.5zm-3.5-9C7.2 2 8 2.78 8 3.75v2.5C8 7.2 7.2 8 6.25 8h-2.5C2.78 8 2 7.2 2 6.25v-2.5C2 2.78 2.78 2 3.75 2h2.5zm3.5 2h11.5a.75.75 0 01.1 1.5H9.75a.75.75 0 01-.1-1.5h11.6-11.5z" fill={primaryFill} /></svg>;
};

export default AppsList24Filled;