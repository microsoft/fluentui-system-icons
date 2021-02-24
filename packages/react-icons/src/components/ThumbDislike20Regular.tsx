import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ThumbDislike20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.05 17.7c.34.98 1.63 1.43 2.43.6.17-.17.33-.36.44-.52.32-.48.45-1.12.5-1.73.05-.63.02-1.3-.05-1.92-.06-.6-.16-1.17-.24-1.58v-.05H14a3 3 0 002.95-3.54l-.69-3.76a4.5 4.5 0 00-5.6-3.54L5.06 3.2c-.92.25-1.62 1-1.8 1.92l-.35 1.77c-.28 1.39.78 2.56 1.9 3 .33.13.62.3.85.5 1.7 1.5 2.32 2.72 3.38 4.84.36.71.72 1.68 1 2.49zm1.97-5.58v.04a14.2 14.2 0 01.36 2.08c.06.58.09 1.18.04 1.73-.04.55-.15.98-.33 1.25-.06.1-.18.22-.33.39-.2.2-.63.16-.76-.23-.29-.82-.67-1.83-1.05-2.6-1.07-2.14-1.76-3.5-3.62-5.15-.34-.3-.74-.52-1.13-.68-.88-.34-1.45-1.14-1.3-1.87l.35-1.77c.11-.56.53-1 1.08-1.15l5.6-1.53a3.5 3.5 0 014.36 2.75l.68 3.76a2 2 0 01-1.96 2.36h-1.5a.5.5 0 00-.5.62z" fill={primaryFill} /></svg>;
};

export default ThumbDislike20Regular;