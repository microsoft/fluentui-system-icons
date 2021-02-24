import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentSync24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm5.63-10c.6 0 1.17.24 1.59.66l2.81 2.8 2.8 2.82c.43.42.67 1 .67 1.6v9.87c0 1.24-1.01 2.25-2.25 2.25h-6.56c.43-.44.79-.95 1.08-1.5h5.48c.41 0 .75-.34.75-.75V10h-4.25c-1.2 0-2.17-.92-2.24-2.1L12 7.76V3.5H6.25a.75.75 0 00-.75.75v6.83c-.52.08-1.03.22-1.5.42V4.25C4 3.01 5 2 6.25 2h5.88zM9.5 17.5H7.41a.5.5 0 000 1h.96a2.13 2.13 0 01-3.61.22.5.5 0 00-.82.57 3.13 3.13 0 004.94.23l.12-.15v.72a.5.5 0 001 0V17.91a.5.5 0 00-.5-.41zm-3-3.12c-.95 0-1.8.42-2.38 1.1l-.12.15v-.72a.5.5 0 00-1 0V17.09c.04.2.2.36.4.4l.1.01h2.09a.5.5 0 000-1h-.97a2.13 2.13 0 013.62-.21.5.5 0 10.82-.57 3.15 3.15 0 00-2.56-1.34zm7-9.82v3.2c0 .37.28.69.65.74H17.45L13.5 4.56z" fill={primaryFill} /></svg>;
};

export default DocumentSync24Regular;