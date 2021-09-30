import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 2a.5.5 0 00-.49.38l-.25 1a.5.5 0 10.98.24L3.14 3h2.72l-1.4 8h-.73a.5.5 0 000 1h2.3a5.57 5.57 0 010-1h-.55l1.4-8h2.98l-.1.38a.5.5 0 10.98.24l.25-1A.5.5 0 0010.5 2H2.75zM1.5 13h4.7c.1.35.24.68.4 1H1.5a.5.5 0 010-1zM16 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z" fill={primaryFill} /></svg>;
}

const ClearFormatting16Regular = wrapIcon(rawSvg({}), 'ClearFormatting16Regular');
export default ClearFormatting16Regular;
      