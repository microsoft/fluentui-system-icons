import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentSync24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2h-6.81A6.5 6.5 0 004 11.5V4c0-1.1.9-2 2-2h6z" fill={primaryFill} /><path d="M13.5 2.5V8c0 .28.22.5.5.5h5.5l-6-6z" fill={primaryFill} /><path d="M12 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5.5-3.12a3.12 3.12 0 012.56 1.34.5.5 0 01-.82.57 2.14 2.14 0 00-1.74-.91c-.8 0-1.52.45-1.88 1.12h.88a.5.5 0 110 1h-2A.5.5 0 013 17v-2a.5.5 0 111 0v.62a3.12 3.12 0 012.5-1.24zm2.5 5a3.12 3.12 0 01-5.06-.09.5.5 0 11.82-.57 2.15 2.15 0 001.74.9c.8 0 1.51-.45 1.87-1.12H7.5a.5.5 0 010-1h2c.28 0 .5.22.5.5v2a.5.5 0 01-1 0v-.63z" fill={primaryFill} /></svg>;
};

export default DocumentSync24Filled;