import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M37 32L26.91 42.7a4 4 0 01-5.82 0L11 32h.04l-.02-.02-.02-.03A17.05 17.05 0 017 21a17 17 0 1130 10.95l-.02.03-.02.02H37zM25.12 16.88l2.86 2.87H17a1.25 1.25 0 100 2.5h10.98l-2.86 2.87a1.25 1.25 0 001.76 1.76l5-5c.5-.48.5-1.28 0-1.76l-5-5a1.25 1.25 0 00-1.76 1.76z" fill={primaryFill} /></svg>;
}

const LocationArrowRight48Filled = wrapIcon(rawSvg({}), 'LocationArrowRight48Filled');
export default LocationArrowRight48Filled;
      