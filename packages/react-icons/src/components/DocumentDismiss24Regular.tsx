import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentDismiss24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm5.63-10c.6 0 1.17.24 1.59.66l2.81 2.8 2.8 2.82c.43.42.67 1 .67 1.6v9.87c0 1.24-1.01 2.25-2.25 2.25h-6.56c.43-.44.79-.95 1.08-1.5h5.48c.41 0 .75-.34.75-.75V10h-4.25c-1.2 0-2.17-.92-2.24-2.1L12 7.76V3.5H6.25a.75.75 0 00-.75.75v6.83c-.52.08-1.03.22-1.5.42V4.25C4 3.01 5 2 6.25 2h5.88zM4.09 14.97l-.07.05-.05.07a.5.5 0 000 .57l.05.07L5.8 17.5l-1.76 1.77-.06.07a.5.5 0 000 .57l.06.06.07.06c.17.12.4.12.56 0l.07-.06 1.77-1.76 1.77 1.77.07.05c.17.12.4.12.57 0l.07-.05.05-.07a.5.5 0 000-.57l-.05-.07L7.2 17.5l1.77-1.77.06-.07a.5.5 0 000-.57l-.06-.07-.07-.05a.5.5 0 00-.57 0l-.07.05L6.5 16.8l-1.77-1.77-.07-.05a.5.5 0 00-.57 0zm9.4-10.41l.01 3.2c0 .37.28.69.65.74H17.45L13.5 4.56z" fill={primaryFill} /></svg>;
};

export default DocumentDismiss24Regular;