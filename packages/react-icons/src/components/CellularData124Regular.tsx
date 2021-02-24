import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CellularData124Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 17c.38 0 .7.28.74.65l.01.1v1.5a.75.75 0 01-1.5.1v-1.6c0-.41.34-.75.75-.75zm8-6c.38 0 .7.28.74.65l.01.1v7.5a.75.75 0 01-1.5.1v-7.6c0-.41.34-.75.75-.75zm4-3c.38 0 .7.28.74.65l.01.1v10.5a.75.75 0 01-1.5.1V8.75c0-.41.34-.75.75-.75zm4-3c.37 0 .69.28.74.64l.01.1v13.5a.75.75 0 01-1.5.12V5.76c0-.42.33-.76.74-.76zm-12 9c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default CellularData124Regular;