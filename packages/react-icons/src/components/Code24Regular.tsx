import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Code24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.07 18.94l6.5-14.5a.75.75 0 011.4.52l-.04.1-6.5 14.5a.75.75 0 01-1.4-.52l.04-.1 6.5-14.5-6.5 14.5zm-5.85-7.47l4.25-4.25a.75.75 0 011.13.98l-.07.08L3.81 12l3.72 3.72a.75.75 0 01-.98 1.13l-.08-.07-4.25-4.25a.75.75 0 01-.07-.98l.07-.08 4.25-4.25-4.25 4.25zm14.25-4.25a.75.75 0 01.98-.07l.08.07 4.25 4.25c.27.27.3.68.07.98l-.07.08-4.25 4.25a.75.75 0 01-1.13-.98l.07-.08L20.19 12l-3.72-3.72a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
};

export default Code24Regular;