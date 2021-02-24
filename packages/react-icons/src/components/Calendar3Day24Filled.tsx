import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Calendar3Day24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm-10 4c-.38 0-.7.28-.74.65l-.01.1v8.6a.75.75 0 001.5 0v-8.7A.75.75 0 007.74 7zm8.5 0c-.38 0-.7.28-.74.65l-.01.1v8.6a.75.75 0 001.5 0v-8.7a.75.75 0 00-.75-.65zM12 7c-.38 0-.7.28-.74.65l-.01.1v8.6a.75.75 0 001.5 0v-8.7A.75.75 0 0012 7z" fill={primaryFill} /></svg>;
};

export default Calendar3Day24Filled;