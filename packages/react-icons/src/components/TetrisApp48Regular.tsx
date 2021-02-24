import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TetrisApp48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 4A3.25 3.25 0 0014 7.25v6c0 .41-.34.75-.75.75h-6A3.25 3.25 0 004 17.25v6c0 1.8 1.46 3.25 3.25 3.25h16c1.8 0 3.25-1.46 3.25-3.25v-6c0-.41.34-.75.75-.75h6c1.8 0 3.25-1.46 3.25-3.25v-6c0-1.8-1.46-3.25-3.25-3.25h-16zm16 10H26.5V6.5h6.75c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75zM24 14h-7.5V7.25c0-.41.34-.75.75-.75H24V14zm-10 2.5V24H7.25a.75.75 0 01-.75-.75v-6c0-.41.34-.75.75-.75H14zm2.5 0H24v6.75c0 .41-.34.75-.75.75H16.5v-7.5zm18.25 5h6c1.8 0 3.25 1.46 3.25 3.25v16c0 1.8-1.46 3.25-3.25 3.25h-27.5A3.25 3.25 0 0110 40.75v-6c0-1.8 1.46-3.25 3.25-3.25h17.5c.41 0 .75-.34.75-.75v-6c0-1.8 1.46-3.25 3.25-3.25zm-3.25 20V34h-8v7.5h8zm10-7.5H34v7.5h6.75c.41 0 .75-.34.75-.75V34zM34 31.5h7.5v-6.75a.75.75 0 00-.75-.75h-6a.75.75 0 00-.75.75v6.75zM21 34h-7.75a.75.75 0 00-.75.75v6c0 .41.34.75.75.75H21V34z" fill={primaryFill} /></svg>;
};

export default TetrisApp48Regular;