import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.48 3.54c-.3.5-.48 1.08-.48 1.71v3a.75.75 0 001.5 0v-3c0-.2.04-.4.1-.59l5.45 5.45h-.01l-.03.03-1.54.85a2.27 2.27 0 00-1.06 2.84l.44 1.09a2.4 2.4 0 001.56 1.39l4.5 1.32c1.06.3 2.2 0 2.93-.73l3.5 3.5c-.19.06-.38.1-.59.1h-3a.75.75 0 000 1.5h3c.63 0 1.21-.18 1.7-.48l.27.26a.75.75 0 001.06-1.06L3.28 2.22a.75.75 0 10-1.06 1.06l.26.26zm8.25 4l6.36 6.37.56-1.75c.49-1.56-.78-3-2.34-3h-.19c.08-.38.15-.81.14-1.2-.01-.42-.05-.97-.3-1.47-.29-.58-.8-1-1.5-1.18-1.1-.29-1.9.5-2.17 1.11-.19.44-.35.74-.56 1.13zm9.77 9.78l1.5 1.5v-3.07a.75.75 0 00-1.5 0v1.57zM5.18 2l1.5 1.5h1.57a.75.75 0 000-1.5H5.18zM20.5 5.25c0-.97-.78-1.75-1.75-1.75h-3a.75.75 0 010-1.5h3C20.55 2 22 3.46 22 5.25v3a.75.75 0 01-1.5 0v-3zM5.25 20.5c-.97 0-1.75-.78-1.75-1.75v-3a.75.75 0 00-1.5 0v3C2 20.55 3.46 22 5.25 22h3a.75.75 0 000-1.5h-3z" fill={primaryFill} /></svg>;
}

const ScanThumbUpOff24Filled = wrapIcon(rawSvg({}), 'ScanThumbUpOff24Filled');
export default ScanThumbUpOff24Filled;
      