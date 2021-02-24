import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Speaker124Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.7 3.44c.2.23.3.51.3.81v15.5a1.25 1.25 0 01-2.06.96L7.98 16.5H4.25c-1.24 0-2.25-1-2.25-2.25v-4.5C2 8.51 3 7.5 4.25 7.5h3.73l4.96-4.2a1.25 1.25 0 011.76.14zM13.5 4.8L8.52 9H4.25a.75.75 0 00-.75.75v4.5c0 .41.34.75.75.75h4.27l4.98 4.21V4.8zm3.6 3.85a.75.75 0 011.03.25c.58.94.87 2 .87 3.14 0 1.15-.3 2.2-.87 3.14a.75.75 0 11-1.28-.78c.43-.7.65-1.48.65-2.36 0-.88-.22-1.66-.65-2.36a.75.75 0 01.25-1.03z" fill={primaryFill} /></svg>;
};

export default Speaker124Regular;