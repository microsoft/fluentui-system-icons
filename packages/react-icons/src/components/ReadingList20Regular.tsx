import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadingList20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25a1.25 1.25 0 012.3-.7.5.5 0 10.82-.55 2.25 2.25 0 10-1.74 3.5H15.5a.5.5 0 000-1H4.38a.5.5 0 00-.06 0A1.25 1.25 0 013 6.25z" fill={primaryFill} /><path d="M8.5 5a.5.5 0 000 1h9a.5.5 0 000-1h-9z" fill={primaryFill} /><path d="M5.5 10a.5.5 0 000 1h12a.5.5 0 000-1h-12z" fill={primaryFill} /><path d="M2 13c0-.28.22-.5.5-.5h12a.5.5 0 010 1h-12A.5.5 0 012 13z" fill={primaryFill} /><path d="M5.5 15a.5.5 0 000 1h12a.5.5 0 100-1h-12z" fill={primaryFill} /></svg>;
};

export default ReadingList20Regular;