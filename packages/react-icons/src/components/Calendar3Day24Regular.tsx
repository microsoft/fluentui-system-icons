import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Calendar3Day24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75zM7.75 7c.38 0 .7.28.74.65l.01.1v8.5a.75.75 0 01-1.5.1v-8.6c0-.41.34-.75.75-.75zm8.5 0c.38 0 .7.28.74.65l.01.1v8.5a.75.75 0 01-1.5.1v-8.6c0-.41.34-.75.75-.75zM12 7c.38 0 .7.28.74.65l.01.1v8.5a.75.75 0 01-1.5.1v-8.6c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default Calendar3Day24Regular;