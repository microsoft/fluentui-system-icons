import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CameraSwitch24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 7.5c.38 0 .7.28.74.65l.01.1v8.5a3.25 3.25 0 01-3.07 3.24l-.18.01H6.06l.72.72c.27.27.3.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07-2-2-.06-.07-.01-.01.07.08a.75.75 0 010-1.06l2-2a.75.75 0 011.13.98l-.07.08-.72.72h12.69c.92 0 1.67-.7 1.74-1.6l.01-.15v-8.5c0-.41.34-.75.75-.75zM18.2 2.15l.08.07 2 2 .07.08-.07-.08a.75.75 0 010 1.06l-2 2a.75.75 0 01-1.13-.98l.07-.08.72-.72H5.25c-.92 0-1.67.7-1.74 1.6l-.01.15v8.5a.75.75 0 01-1.5.1v-8.6a3.25 3.25 0 013.07-3.24L5.25 4h12.69l-.72-.72a.75.75 0 01-.07-.98l.07-.08a.75.75 0 01.98-.07zM12 8a4 4 0 110 8 4 4 0 010-8zm0 1.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill={primaryFill} /></svg>;
};

export default CameraSwitch24Regular;