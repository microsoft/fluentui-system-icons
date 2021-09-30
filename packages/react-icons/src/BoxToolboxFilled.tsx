import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.42 5L14.38 6.2l-7.5-3 1.82-.73a3.5 3.5 0 012.6 0l5.76 2.3c.13.06.25.13.36.21zM10 7.95l3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 00-.36.21L10 7.96zm-7.96-2.1c-.03.1-.04.2-.04.32v7.64c0 .62.37 1.17.94 1.4l5.76 2.3.3.1V13.5c0-.56.19-1.08.5-1.5V8.84L2.04 5.85zM18 6.17v4.87h-.04A2.5 2.5 0 0015.5 9h-2a2.5 2.5 0 00-2.46 2.04c-.19.04-.37.1-.54.17V8.84l7.46-2.99c.03.1.04.22.04.33zM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const BoxToolboxFilled = wrapIcon(rawSvg({}), 'BoxToolboxFilled');
export default BoxToolboxFilled;
      