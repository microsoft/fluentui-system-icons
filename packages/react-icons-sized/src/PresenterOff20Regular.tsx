import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 8.5c0-.23.05-.45.15-.65l-5-5a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-3.71-3.7-.29.27a.5.5 0 00-.15.36v1.72c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 017 16.5v-1.72a.5.5 0 00-.15-.36l-3.7-3.56a.5.5 0 01.34-.86h5.8l-1-1H7v-.5zm3.3 2.5H4.72l2.81 2.7c.3.29.46.68.46 1.08v1.72c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-1.72c0-.4.17-.8.46-1.08l.27-.26L10.3 11z" fill={primaryFill} /><path d="M12 4a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M10.12 8h1.38c.28 0 .5.22.5.5V9h1v-.5c0-.83-.67-1.5-1.5-1.5H9.12l1 1z" fill={primaryFill} /><path d="M14.88 12.76l-.7-.7L15.26 11h-2.15l-1-1h4.39a.5.5 0 01.35.86l-1.98 1.9z" fill={primaryFill} /></svg>;
}

const PresenterOff20Regular = wrapIcon(rawSvg({}), 'PresenterOff20Regular');
export default PresenterOff20Regular;
      