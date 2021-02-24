import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Channel24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.45 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V9.37a2.25 2.25 0 10.22-4.3A3.25 3.25 0 016.25 3h11.5zm-4.5 10h-4.5l-.1.01a.75.75 0 000 1.49H13.35a.75.75 0 00-.1-1.5zm2-3.5h-6.6a.75.75 0 000 1.49H15.35a.75.75 0 00-.1-1.5zM3.75 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
};

export default Channel24Filled;