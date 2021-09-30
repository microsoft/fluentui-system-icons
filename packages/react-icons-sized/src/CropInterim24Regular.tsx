import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.67 9.1a6.5 6.5 0 11-5.17 11.52v.63c0 .38-.29.7-.65.74l-.1.01a.75.75 0 01-.75-.65v-2.6c0-.38.28-.7.64-.74h2.61a.75.75 0 01.1 1.48l-.1.01h-.74a4.98 4.98 0 008-4 5 5 0 00-3.6-4.8l-.24-1.6zM14.5 3a2.5 2.5 0 01.97 4.8l.82 5.32A2.5 2.5 0 1113.5 17H6.5a2.5 2.5 0 11-2.78-3.88l.82-5.3A2.5 2.5 0 117.5 4h4.99c.46-.6 1.18-1 2-1zM4.5 14.5h-.12a1 1 0 000 2h.12a1 1 0 001-.88v-.24a1 1 0 00-.52-.76l-.11-.05-.13-.04-.08-.02-.16-.01zm10.7.05l-.06.02-.06.03-.1.05a1 1 0 00.4 1.84l.12.01a1 1 0 00.12-2h-.12l-.16.01-.15.04zM11.98 5.5H8c0 1.2-.84 2.2-1.96 2.45l-.8 5.16A2.5 2.5 0 017 15.31l.01.19h6a2.5 2.5 0 011.76-2.39l-.8-5.16A2.5 2.5 0 0112 5.67V5.5zm1.77.7l.03.02.12.1.08.05.1.05.1.04.1.02.07.02h.25l.17-.04.12-.05.09-.04.1-.06.1-.1.08-.08a1 1 0 00-.3-1.5l-.1-.05-.15-.05-.08-.01a.99.99 0 00-.15-.02l-.12.01a1 1 0 00-.6 1.69zM4.5 5.5a1 1 0 00.22.63l.07.07a1 1 0 00.19.16l.1.05.1.04.09.03.1.02h.13a1 1 0 00.17-.01l.07-.02.11-.03.06-.02.15-.09.08-.06.06-.05.08-.1.06-.08a1 1 0 00.15-.42l.01-.12v-.12l-.03-.1-.01-.07a1 1 0 00-.84-.7H5.5a1 1 0 00-.17 0l-.08.02-.09.03-.05.02-.1.05a1 1 0 00-.51.87z" fill={primaryFill} /></svg>;
}

const CropInterim24Regular = wrapIcon(rawSvg({}), 'CropInterim24Regular');
export default CropInterim24Regular;
      