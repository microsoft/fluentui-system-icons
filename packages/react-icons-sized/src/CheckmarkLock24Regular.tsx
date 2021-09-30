import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 019.92 11.26 3.5 3.5 0 00-1.47-2.17A8.5 8.5 0 1013 20.44v1.06c0 .15.01.3.04.45A10 10 0 1112 2zm8.49 10.48A2.5 2.5 0 0016 14v1h-.5c-.83 0-1.5.67-1.5 1.5v5l.03.3c.14.68.74 1.2 1.47 1.2h6c.83 0 1.5-.67 1.5-1.5v-5a1.5 1.5 0 00-1.5-1.5H21v-1c0-.57-.2-1.1-.51-1.52zm-2.38 7.44a1 1 0 11.78-1.84 1 1 0 01-.78 1.84zM17.5 14a1 1 0 112 0v1h-2v-1zm-6.75-.56l4.47-4.47a.75.75 0 011.13.98l-.07.08-5 5a.75.75 0 01-.98.07l-.08-.07-2.5-2.5a.75.75 0 01.98-1.13l.08.07 1.97 1.97z" fill={primaryFill} /></svg>;
}

const CheckmarkLock24Regular = wrapIcon(rawSvg({}), 'CheckmarkLock24Regular');
export default CheckmarkLock24Regular;
      