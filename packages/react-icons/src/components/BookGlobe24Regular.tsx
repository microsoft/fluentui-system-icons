import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookGlobe24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.04 6.02a4.75 4.75 0 10.34-.02h-.01a1.35 1.35 0 00-.33.02zm-1.62 1.83c-.23.68-.37 1.5-.4 2.4h-1.1c.14-1 .7-1.86 1.5-2.4zm-.38 3.9c.07.7.2 1.36.38 1.91a3.5 3.5 0 01-1.4-1.91h1.02zm3.97 2.1c.22-.6.38-1.31.45-2.1h1.27a3.5 3.5 0 01-1.72 2.1zm-1.06-2.1a6.49 6.49 0 01-.34 1.57 2.06 2.06 0 01-.36.64l-.02-.02c-.1-.11-.22-.31-.34-.62a6.49 6.49 0 01-.34-1.57h1.4zm.04-1.5H11.5a7.1 7.1 0 01.38-2.07 2.06 2.06 0 01.36-.64l.02.02c.1.11.22.31.34.62.2.52.34 1.24.38 2.07zm1.5 0A8.65 8.65 0 0014 7.66a3.5 3.5 0 011.83 2.59h-1.35zM12.3 7.49zm-.12 0z" fill={primaryFill} /><path d="M6.5 2A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22h13.25a.75.75 0 000-1.5H6.5a1 1 0 01-1-1h14.25c.41 0 .75-.34.75-.75V4.5A2.5 2.5 0 0018 2H6.5zM19 4.5V18H5.5V4.5a1 1 0 011-1H18a1 1 0 011 1z" fill={primaryFill} /></svg>;
};

export default BookGlobe24Regular;