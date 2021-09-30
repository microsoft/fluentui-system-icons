import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.75 5c.7 0 1.25.56 1.25 1.25v2.26c0 .4-.3.72-.7.75a2.75 2.75 0 000 5.48c.4.03.7.36.7.75v2.26c0 .69-.56 1.25-1.25 1.25H3.25C2.56 19 2 18.44 2 17.75v-2.26c0-.4.3-.72.7-.75a2.75 2.75 0 000-5.48.75.75 0 01-.7-.75V6.25C2 5.56 2.56 5 3.25 5h17.5z" fill={primaryFill} /></svg>;
}

const TicketHorizontal24Filled = wrapIcon(rawSvg({}), 'TicketHorizontal24Filled');
export default TicketHorizontal24Filled;
      