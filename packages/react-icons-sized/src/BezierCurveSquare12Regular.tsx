import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3c0-1.1.9-2 2-2h6a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm1 5.97V9a1 1 0 001 1h6a1 1 0 001-1v-.03a2.83 2.83 0 01-1.77-.91 5.4 5.4 0 01-1.01-1.9l-.2-.56a7.65 7.65 0 00-.41-1.09C6.41 4.11 6.22 4 6 4c-.22 0-.4.11-.61.51-.16.3-.28.66-.41 1.09l-.2.57a5.4 5.4 0 01-1.01 1.89c-.44.47-1.01.8-1.77.9zm8-1.01V3a1 1 0 00-1-1H3a1 1 0 00-1 1v4.96c.46-.1.78-.3 1.03-.58.36-.39.6-.93.81-1.55L4 5.36c.15-.45.3-.93.5-1.3C4.78 3.5 5.22 3 6 3s1.22.51 1.5 1.05c.2.38.35.86.5 1.31l.16.47c.22.62.45 1.16.81 1.55.25.28.57.49 1.03.58z" fill={primaryFill} /></svg>;
}

const BezierCurveSquare12Regular = wrapIcon(rawSvg({}), 'BezierCurveSquare12Regular');
export default BezierCurveSquare12Regular;
      