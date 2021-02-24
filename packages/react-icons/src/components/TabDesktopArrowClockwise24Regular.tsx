import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabDesktopArrowClockwise24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3A2.75 2.75 0 003 5.75v5.35c.44-.45.95-.84 1.5-1.16V5.75c0-.69.56-1.25 1.25-1.25H11v1.25C11 6.99 12 8 13.25 8h6.25v10.25c0 .69-.56 1.25-1.25 1.25h-4.19A7.03 7.03 0 0112.9 21h5.35A2.75 2.75 0 0021 18.25V5.75A2.75 2.75 0 0018.25 3H5.75zM19.5 6.5h-6.25a.75.75 0 01-.75-.75V4.5h5.75c.69 0 1.25.56 1.25 1.25v.75z" fill={primaryFill} /><path d="M12.25 9.75c.41 0 .75.34.75.75v2.75c0 .41-.34.75-.75.75H9.5a.75.75 0 010-1.5h1.33l-.02-.01A4.5 4.5 0 1012.5 16a.75.75 0 011.5 0 6 6 0 11-2.5-4.87v-.63c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default TabDesktopArrowClockwise24Regular;