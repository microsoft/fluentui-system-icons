import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M7 14.78v1.72c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1.72a.5.5 0 01.15-.36l3.7-3.56a.5.5 0 00-.34-.86H3.49a.5.5 0 00-.35.86l3.7 3.56c.1.1.16.23.16.36z" fill={primaryFill} /><path d="M8.5 7C7.67 7 7 7.67 7 8.5V9h6v-.5c0-.83-.67-1.5-1.5-1.5h-3z" fill={primaryFill} /></svg>;
}

const PresenterFilled = wrapIcon(rawSvg({}), 'PresenterFilled');
export default PresenterFilled;
      