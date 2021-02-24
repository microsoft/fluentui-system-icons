import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerOff48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M28 29.77l13.87 13.86a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76L13.23 15H9a5.25 5.25 0 00-5.25 5.25v7.5C3.75 30.65 6.1 33 9 33h4.7c1.17 0 2.3.43 3.18 1.22l8.2 7.36a1.75 1.75 0 002.92-1.3V29.77zm-2.5-2.5V38.6l-6.95-6.25a7.25 7.25 0 00-4.85-1.85H9a2.75 2.75 0 01-2.75-2.75v-7.5A2.75 2.75 0 019 17.5h4.7c.61 0 1.22-.08 1.8-.23l10 10z" fill={primaryFill} /><path d="M19.81 14.5l-1.77-1.76 7.04-6.32A1.75 1.75 0 0128 7.72V22.7l-2.5-2.5V9.4l-5.69 5.1z" fill={primaryFill} /><path d="M36.19 30.88l-1.85-1.85a11.42 11.42 0 00-1.93-12.85l-.01-.02a1.25 1.25 0 011.7-1.83l-.85.92.85-.92v.01l.02.02a3.95 3.95 0 01.18.17c.12.12.27.3.45.51a13.98 13.98 0 011.43 15.84z" fill={primaryFill} /><path d="M41.02 35.72l-1.85-1.85A21.36 21.36 0 0041.5 24c0-4.55-1.3-8.03-2.6-10.37a17.9 17.9 0 00-2.5-3.47 1.25 1.25 0 011.7-1.82l-.85.91.86-.91.02.03a5.28 5.28 0 01.27.26 20.4 20.4 0 012.7 3.79A23.76 23.76 0 0144 24c0 5.05-1.45 8.94-2.9 11.58l-.03.04-.05.1z" fill={primaryFill} /></svg>;
};

export default SpeakerOff48Regular;