import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Directions24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.3 2.98l6.72 6.72a3.25 3.25 0 010 4.6l-6.72 6.72a3.25 3.25 0 01-4.6 0L2.98 14.3a3.25 3.25 0 010-4.6L9.7 2.98a3.25 3.25 0 014.6 0zm-3.54 1.06l-6.71 6.72c-.69.69-.69 1.8 0 2.48l6.71 6.71c.69.69 1.8.69 2.48 0l6.71-6.71c.69-.69.69-1.8 0-2.48l-6.71-6.72a1.75 1.75 0 00-2.48 0zm1.7 3.26l.07-.08a.75.75 0 01.98-.07l.08.07 2 2c.27.27.3.68.07.98l-.07.08-2 2a.75.75 0 01-1.13-.98l.07-.08.72-.72h-1.5c-.65 0-1.18.5-1.24 1.12l-.01.13V15a.75.75 0 01-1.5.1v-3.35A2.75 2.75 0 0111.58 9h1.67l-.72-.72a.75.75 0 01-.07-.98l.07-.08-.07.08z" fill={primaryFill} /></svg>;
};

export default Directions24Regular;