import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Lasso20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.16 2.21a8.02 8.02 0 013.68 0 .75.75 0 01-.35 1.46 6.52 6.52 0 00-2.98 0 .75.75 0 01-.35-1.46z" fill={primaryFill} /><path d="M6.83 3.44c.21.35.1.81-.25 1.03a6.54 6.54 0 00-2.11 2.11.75.75 0 01-1.28-.79 8.04 8.04 0 012.6-2.6.75.75 0 011.04.25z" fill={primaryFill} /><path d="M13.17 3.44a.75.75 0 011.04-.25 8.04 8.04 0 012.6 2.6.75.75 0 01-1.28.8 6.54 6.54 0 00-2.11-2.12.75.75 0 01-.25-1.03z" fill={primaryFill} /><path d="M3.11 7.6c.4.1.66.5.56.9a6.52 6.52 0 000 3 .75.75 0 01-1.46.34 8.02 8.02 0 010-3.68c.1-.4.5-.65.9-.56z" fill={primaryFill} /><path d="M16.89 7.6c.4-.1.8.16.9.56a8.02 8.02 0 010 3.68.75.75 0 01-1.46-.35 6.52 6.52 0 000-2.98c-.1-.4.15-.81.56-.9z" fill={primaryFill} /><path d="M3.44 13.17a.75.75 0 011.03.25 6.54 6.54 0 002.11 2.11.75.75 0 11-.79 1.28 8.04 8.04 0 01-2.6-2.6.75.75 0 01.25-1.04z" fill={primaryFill} /><path d="M17.11 14.44a.75.75 0 00-1.22-.88l-.02.03a4.79 4.79 0 01-.38.46c-.24.28-.6.64-1.02 1.01a6.73 6.73 0 00-3.97-1.31 2.6 2.6 0 00-1.84.68 2.17 2.17 0 000 3.14 2.6 2.6 0 001.84.68c1.53 0 2.87-.58 3.91-1.27a9.4 9.4 0 011.1 1.31 7.02 7.02 0 01.3.52l.02.02c-.15-.26 0 0 0 0a.75.75 0 001.34-.67c.19.38 0 0 0 0l-.01-.02-.02-.04a5.61 5.61 0 00-.4-.64 9.9 9.9 0 00-1.13-1.4 11.79 11.79 0 001.46-1.57l.03-.04v-.01h.01zm-6.61.81c1.03 0 1.91.3 2.65.74a5.4 5.4 0 01-2.65.76c-.42 0-.67-.13-.8-.26a.67.67 0 010-.98c.13-.13.38-.26.8-.26z" fill={primaryFill} /></svg>;
};

export default Lasso20Filled;