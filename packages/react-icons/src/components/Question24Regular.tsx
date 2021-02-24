import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Question24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4a5 5 0 00-5 5 .75.75 0 001.5 0 3.5 3.5 0 117 0c0 .85-.22 1.42-.53 1.86a5.82 5.82 0 01-1.44 1.34c-1 .77-2.28 1.73-2.28 3.8v.25a.75.75 0 001.5 0V16c0-1.32.71-1.86 1.79-2.68l.04-.04c.53-.4 1.15-.88 1.62-1.56A5 5 0 0012 4z" fill={primaryFill} /><path d="M12 21a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default Question24Regular;