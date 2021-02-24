import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Sleep24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.38 3.03a9 9 0 11-7.9 14.1.68.68 0 01.32-1.02c3.4-1.21 5.21-2.62 6.27-4.63 1.1-2.12 1.4-4.44.62-7.62a.68.68 0 01.69-.83zm1 1.63l.07.4c.42 2.7.07 4.97-1.06 7.12-1.14 2.18-3 3.7-6.01 4.94a7.5 7.5 0 107.68-12.29l-.34-.09-.33-.08zm-3.39-1l.01.1V9a2 2 0 11-1.5-1.94v-2.3L6 5.83V10a2 2 0 11-1.5-1.94V5.27c0-.29.17-.55.43-.68l.1-.03 5-1.53c.42-.12.84.13.95.53l.01.1z" fill={primaryFill} /></svg>;
};

export default Sleep24Regular;