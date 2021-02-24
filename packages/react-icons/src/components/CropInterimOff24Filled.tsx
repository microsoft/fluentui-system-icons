import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CropInterimOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l1.06 1.06a2.49 2.49 0 001.26 3.47l-.82 5.31A2.5 2.5 0 106.5 17h7a2.5 2.5 0 003.16.72l1.8 1.8a4.98 4.98 0 01-5.95-.02h.84a.75.75 0 00-.1-1.5h-2.6a.75.75 0 00-.65.75v2.6c.05.37.37.65.75.65h.1a.75.75 0 00.65-.75v-.63a6.48 6.48 0 008.04-.02l1.18 1.18a.75.75 0 001.06-1.06L3.28 2.22zm10 12.13c-.17.34-.28.73-.28 1.15H7v-.19a2.5 2.5 0 00-1.76-2.2l.8-5.16c.22-.05.42-.13.62-.23l6.63 6.63z" fill={primaryFill} /><path d="M7.18 4l1.5 1.5h3.3l.01.17a2.5 2.5 0 001.97 2.28l.52 3.35 1.8 1.8-.82-5.3A2.5 2.5 0 1012.49 4h-5.3z" fill={primaryFill} /><path d="M20.25 17.07l1.16 1.16a6.5 6.5 0 00-4.74-9.12l.25 1.6a5 5 0 013.33 6.36z" fill={primaryFill} /></svg>;
};

export default CropInterimOff24Filled;