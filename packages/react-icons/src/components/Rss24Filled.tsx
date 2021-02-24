import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Rss24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25zm.5 4.5A.74.74 0 016 6.78v-.06c0-.39.3-.72.7-.72h.05C12.96 6 18 11.04 18 17.25v.05c0 .4-.33.7-.72.7h-.06a.74.74 0 01-.72-.75A9.75 9.75 0 006.75 7.5zM13.29 18h-.09c-.4 0-.7-.35-.7-.75a5.75 5.75 0 00-5.75-5.75c-.4 0-.75-.3-.75-.7v-.1a.69.69 0 01.75-.7A7.25 7.25 0 0114 17.33c0 .38-.33.67-.7.67zM7.5 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={primaryFill} /></svg>;
};

export default Rss24Filled;