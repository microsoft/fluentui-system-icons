import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 2A2.75 2.75 0 0120 4.75v6.75c-.47-.2-.98-.34-1.5-.42V4.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h6.33c.08.52.22 1.03.42 1.5H4.75A2.75 2.75 0 012 17.25V4.75A2.75 2.75 0 014.75 2h12.5zM9 13.44l6.47-6.47a.75.75 0 011.13.98l-.07.08-7 7a.75.75 0 01-.98.07l-.08-.07-3-3a.75.75 0 01.98-1.13l.08.07L9 13.44zm14 4.06a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5-.5a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L19.29 17H14.5z" fill={primaryFill} /></svg>;
}

const CheckboxArrowRight24Regular = wrapIcon(rawSvg({}), 'CheckboxArrowRight24Regular');
export default CheckboxArrowRight24Regular;
      