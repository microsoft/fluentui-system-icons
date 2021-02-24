import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Mail48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M37.75 9c2.9 0 5.25 2.35 5.25 5.25v19.5c0 2.9-2.35 5.25-5.25 5.25h-27.5A5.25 5.25 0 015 33.75v-19.5C5 11.35 7.35 9 10.25 9h27.5zm2.75 9.35L24.6 27.1c-.33.18-.73.2-1.07.06l-.13-.06-15.9-8.75v15.4a2.75 2.75 0 002.75 2.75h27.5a2.75 2.75 0 002.75-2.75v-15.4zm-2.75-6.85h-27.5a2.75 2.75 0 00-2.75 2.75v1.25L24 24.57l16.5-9.07v-1.25a2.75 2.75 0 00-2.75-2.75z" fill={primaryFill} /></svg>;
};

export default Mail48Regular;