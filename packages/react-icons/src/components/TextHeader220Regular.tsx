import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextHeader220Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 4c.28 0 .5.22.5.5V9h6V4.5a.5.5 0 011 0v11a.5.5 0 01-1 0V10H3v5.5a.5.5 0 01-1 0v-11c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M14.5 5A2.54 2.54 0 0012 7.5a.5.5 0 01-1 0C11 5.75 12.45 4 14.5 4c1.24 0 2.4.57 3.05 1.54.66 1 .71 2.33-.12 3.72-.42.7-1 1.24-1.62 1.71-.3.24-.62.46-.92.67l-.14.1c-.26.18-.52.35-.77.54-1.01.75-1.78 1.51-1.95 2.72h5.47a.5.5 0 010 1h-6a.5.5 0 01-.5-.5c0-2 1.17-3.13 2.4-4.03.25-.19.52-.38.79-.56l.13-.09c.3-.21.6-.42.88-.64.57-.43 1.04-.89 1.37-1.44.67-1.1.56-2.02.14-2.65A2.64 2.64 0 0014.5 5z" fill={primaryFill} /></svg>;
};

export default TextHeader220Regular;