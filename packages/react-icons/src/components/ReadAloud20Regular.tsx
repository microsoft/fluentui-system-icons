import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadAloud20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.06 2.26a.5.5 0 01.68-.2l.39.22a9.5 9.5 0 014.84 7.36l.03.31a.5.5 0 11-1 .1l-.03-.31a8.5 8.5 0 00-4.33-6.59l-.38-.21a.5.5 0 01-.2-.68z" fill={primaryFill} /><path d="M7.97 4.33a.5.5 0 00-.94 0l-4 11a.5.5 0 00.94.34L5.3 12h4.4l1.33 3.67a.5.5 0 00.94-.34l-4-11zM9.33 11H5.67L7.5 5.96 9.33 11z" fill={primaryFill} /><path d="M12.26 4.57a.5.5 0 10-.52.86l.13.07a5.5 5.5 0 012.6 3.82l.04.26a.5.5 0 00.98-.16l-.04-.27a6.5 6.5 0 00-3.07-4.5l-.12-.08z" fill={primaryFill} /></svg>;
};

export default ReadAloud20Regular;