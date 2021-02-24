import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingBank24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6.25a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M13.03 2.32a1.75 1.75 0 00-2.06 0L3.55 7.74c-.98.71-.48 2.26.73 2.26h.22v5.8A2.75 2.75 0 003 18.25v1.5c0 .41.34.75.75.75h16.5c.41 0 .75-.34.75-.75v-1.5c0-1.07-.61-2-1.5-2.45V10h.22c1.2 0 1.71-1.55.73-2.26l-7.42-5.42zm-1.18 1.22c.09-.07.21-.07.3 0l6.8 4.96H5.05l6.8-4.96zM18 10v5.5h-2V10h2zm-3.5 0v5.5h-1.75V10h1.75zm-3.25 0v5.5H9.5V10h1.75zm-5.5 7h12.5c.69 0 1.25.56 1.25 1.25V19h-15v-.75c0-.69.56-1.25 1.25-1.25zM6 15.5V10h2v5.5H6z" fill={primaryFill} /></svg>;
};

export default BuildingBank24Regular;