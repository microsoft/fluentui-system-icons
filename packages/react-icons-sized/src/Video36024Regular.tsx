import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M7 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /><path d="M17 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /><path d="M2 6.32c0-1.44 1.32-2.5 2.7-2.3 1.57.22 4.1.48 7.3.48s5.73-.26 7.3-.48c1.38-.2 2.7.86 2.7 2.3v11.36c0 1.45-1.32 2.5-2.7 2.3a53.3 53.3 0 00-7.3-.48c-3.19 0-5.73.26-7.3.48-1.38.2-2.7-.85-2.7-2.3V6.32zm2.48-.82c-.52-.07-.98.34-.98.82v11.36c0 .48.46.9.98.82l.52-.07V16a1 1 0 011-1h2.5v3.1l1.5-.07V15a1 1 0 011-1h2a1 1 0 011 1v3.03l1.5.07V15H18a1 1 0 011 1v2.43l.52.07c.52.07.98-.34.98-.82V6.32c0-.48-.46-.9-.98-.82-1.64.23-4.25.5-7.52.5-3.27 0-5.88-.27-7.52-.5z" fill={primaryFill} /></svg>;
}

const Video36024Regular = wrapIcon(rawSvg({}), 'Video36024Regular');
export default Video36024Regular;
      