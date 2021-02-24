import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudSyncComplete48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M31.68 22.4a1.35 1.35 0 011.92 0c.5.5.53 1.28.1 1.82l-.1.1L21.4 36.6c-.55.55-1.44.52-1.95-.03l-.1-.12L15.27 31c-.45-.6-.33-1.46.27-1.9a1.35 1.35 0 011.81.16l.1.1 3.13 4.2 11.1-11.16zM24 8c6.34 0 9.93 4.2 10.45 9.26h.16a7.38 7.38 0 110 14.74H28.8l2.48-2.5h3.53c2.6 0 4.7-2.11 4.7-4.72 0-2.6-2.1-4.72-4.7-4.72h-1.42c-.75 0-1.4-.6-1.4-1.35A8 8 0 0024 10.5a8.04 8.04 0 00-7.98 8.21c0 .75-.65 1.35-1.4 1.35H13.2c-2.6 0-4.7 2.11-4.7 4.72a4.71 4.71 0 004.57 4.72c-.17.84-.03 1.74.46 2.5h-.15a7.38 7.38 0 110-14.74h.16C14.07 12.16 17.66 8 24 8z" fill={primaryFill} /></svg>;
};

export default CloudSyncComplete48Regular;