import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocalLanguage24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.34 6.37l.05.1 5.56 14.5a.75.75 0 01-.42.98.73.73 0 01-.9-.33l-.05-.1-1.43-3.73h-7.1l-.08-.01-1.55 3.76a.73.73 0 01-.96.4.75.75 0 01-.43-.88l.03-.1 5.97-14.5a.73.73 0 011.31-.09zM18.74 2c.39 0 .7.29.75.65V7.5h1.76c.38 0 .69.28.74.65v.1c0 .38-.28.7-.64.74l-.1.01H19.5v7.25c0 .38-.29.7-.65.74l-.1.01a.75.75 0 01-.75-.65V2.75c0-.41.33-.75.75-.75zM8.82 8.75l-3.16 7.54h6.1L8.82 8.75zM10.75 2h5.5c.38 0 .69.29.74.65v3.1C17 8.1 15.1 10 12.76 10a.75.75 0 010-1.5 2.75 2.75 0 002.74-2.58V3.5h-4.74a.75.75 0 01-.1-1.49h5.6-5.5z" fill={primaryFill} /></svg>;
};

export default LocalLanguage24Regular;