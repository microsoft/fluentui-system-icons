import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShareCloseTray24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 17.75C2 18.99 3 20 4.25 20h15.5c1.24 0 2.25-1 2.25-2.25V6.25C22 5.01 21 4 19.75 4H4.25C3.01 4 2 5 2 6.25v11.5zm2.25.75a.75.75 0 01-.75-.75V6.25c0-.41.34-.75.75-.75h15.5c.41 0 .75.34.75.75v11.5c0 .41-.34.75-.75.75H4.25zM12 16.75c.2 0 .39-.07.53-.22l3.25-3.25a.75.75 0 10-1.06-1.06l-1.97 1.97V7.75a.75.75 0 00-1.5 0v6.44l-1.97-1.97a.75.75 0 10-1.06 1.06l3.25 3.25c.14.15.33.22.53.22z" fill={primaryFill} /></svg>;
};

export default ShareCloseTray24Regular;