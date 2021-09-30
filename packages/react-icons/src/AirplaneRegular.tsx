import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.78 8.29L8.1 2.81a1.16 1.16 0 011-1.3h.08l.17-.01c.6 0 1.13.35 1.37.9l2.51 5.74 2.75-.09c1.03-.03 1.9.73 2 1.74l.02.15V10c0 1.08-.87 1.95-1.96 1.95l-2.8-.1-2.52 5.75c-.24.55-.78.9-1.37.9h-.1a1.16 1.16 0 01-1.15-1.3l.68-5.5-2.14-.06-.96 1.67c-.24.43-.7.69-1.18.69a1 1 0 01-1-1v-1.47h-.16a1.53 1.53 0 010-3.05l.16-.01V7a1 1 0 011-1c.49 0 .94.26 1.18.69l.96 1.67 2.14-.07zm.57-5.79h-.12a.16.16 0 00-.14.18l.82 6.57-3.84.13-1.26-2.2A.36.36 0 004.5 7v2.43l-.98.04a.53.53 0 000 1.06l.98.04V13h.08c.1-.03.18-.1.23-.18l1.26-2.2 3.84.13-.82 6.59c0 .09.07.16.16.16h.1a.5.5 0 00.45-.3l2.79-6.36 3.46.11c.52 0 .95-.42.95-.95v-.03a.95.95 0 00-.98-.92l-3.43.11L9.8 2.8a.5.5 0 00-.45-.3z" fill={primaryFill} /></svg>;
}

const AirplaneRegular = wrapIcon(rawSvg({}), 'AirplaneRegular');
export default AirplaneRegular;
      