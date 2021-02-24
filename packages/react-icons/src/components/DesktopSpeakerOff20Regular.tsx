import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DesktopSpeakerOff20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4a2 2 0 01.28-1.02l-.13-.13a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7L14 14.71v2.79a.5.5 0 01-.85.35L11.29 16h-.79a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5h.8l.5-.5-8.77-8.76A1 1 0 003 4v9a1 1 0 001 1h5v1H8v2h2.88l1 1H5.5a.5.5 0 010-1H7v-2H4a2 2 0 01-2-2V4z" fill={primaryFill} /><path d="M18.5 14.5a7.4 7.4 0 01-.19 1.7l-.86-.87a6.95 6.95 0 00-.3-2.9c-.08-.24-.17-.41-.23-.52l-.07-.11a.5.5 0 01.8-.6c.12.16.29.45.44.87.26.68.41 1.5.41 2.43z" fill={primaryFill} /><path d="M16.22 12.97c.16.47.26.95.28 1.4l-1.3-1.29a3.95 3.95 0 00-.15-.36.5.5 0 11.9-.44c.07.14.17.38.27.69z" fill={primaryFill} /><path d="M16 3H5.12l-1-1H16a2 2 0 012 2v6.2a1.5 1.5 0 00-1-.18V4a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
};

export default DesktopSpeakerOff20Regular;