import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitHorizontal24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 12.5a.75.75 0 000-1.5H2.75a.75.75 0 000 1.5h18.5zM20 4.25C20 3.01 19 2 17.75 2H6.25C5.01 2 4 3 4 4.25V10h1.5V4.25c0-.41.34-.75.75-.75h11.5c.41 0 .75.34.75.75V10H20V4.25zm-14.5 15V13.5H4v5.75c0 1.24 1 2.25 2.25 2.25h11.5c1.24 0 2.25-1 2.25-2.25V13.5h-1.5v5.75c0 .41-.34.75-.75.75H6.25a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
};

export default SplitHorizontal24Regular;