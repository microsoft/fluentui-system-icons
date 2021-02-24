import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Dentist12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.47 2.1a2.32 2.32 0 00-1.96-.5c-.6.13-1.14.46-1.5.85-.4.42-.8.98-.82 1.8 0 .36.04.96.38 1.42.3.44.47.67.55.88.09.26.1.53.1.96 0 .42.08.99.3 1.51.2.51.57 1.08 1.2 1.3l.02.01.02.01c.37.1.74.07 1.04-.2.25-.23.34-.56.39-.82.04-.25.07-.53.09-.8v-.08c.03-.3.06-.6.11-.87.15-.7.34-.8.37-.81.24-.06.35-.02.41.01.08.04.16.13.24.31.17.39.22.94.26 1.5.05.53.16 1.06.4 1.4.13.2.32.38.6.44a1 1 0 00.76-.16c.76-.48 1.17-1.47 1.28-2.69.05-.56.11-.8.19-.99.05-.14.12-.25.22-.42l.24-.4c.15-.28.42-.8.45-1.43.03-.66-.2-1.37-.96-1.98a2.9 2.9 0 00-1.99-.76c-.6.03-1.1.3-1.43.6l-.02.01-.01.01c-.3.31-.4.3-.4.3s-.04 0-.12-.05a2.4 2.4 0 01-.37-.32l-.02-.02-.02-.02zm2.34.98c.34 0 .7.1.98.35.29.26.46.63.5 1.07a.5.5 0 11-1 .1c-.02-.24-.1-.36-.16-.42a.46.46 0 00-.32-.1.5.5 0 110-1z" fill={primaryFill} /></svg>;
};

export default Dentist12Filled;