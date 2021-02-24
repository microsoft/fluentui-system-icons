import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Rss24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 7.5A.74.74 0 016 6.78v-.06c0-.39.3-.72.7-.72h.05C12.96 6 18 11.04 18 17.25v.05c0 .4-.33.7-.72.7h-.06a.74.74 0 01-.72-.75A9.75 9.75 0 006.75 7.5zM13.29 18a.69.69 0 00.71-.75A7.25 7.25 0 006.67 10a.69.69 0 00-.67.7v.1c0 .4.35.7.75.7a5.75 5.75 0 015.75 5.75c0 .4.3.75.7.75h.1zM9 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25zM4.5 6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v11.5c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V6.25z" fill={primaryFill} /></svg>;
};

export default Rss24Regular;