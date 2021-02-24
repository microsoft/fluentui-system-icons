import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadingList16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5a1 1 0 011.84-.56.5.5 0 10.83-.55A2 2 0 104.07 7h7.43a.5.5 0 000-1H4.08a.5.5 0 00-.04 0A1 1 0 013 5z" fill={primaryFill} /><path d="M7.5 4a.5.5 0 000 1h6a.5.5 0 100-1h-6z" fill={primaryFill} /><path d="M4.5 8a.5.5 0 000 1h9a.5.5 0 100-1h-9z" fill={primaryFill} /><path d="M2 10.5c0-.28.22-.5.5-.5h9a.5.5 0 110 1h-9a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4.5 12a.5.5 0 000 1h9a.5.5 0 100-1h-9z" fill={primaryFill} /></svg>;
};

export default ReadingList16Regular;