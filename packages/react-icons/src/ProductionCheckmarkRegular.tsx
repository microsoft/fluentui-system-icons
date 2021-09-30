import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3zm6.5-.5a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm.5 3V4h2v2h-2zM2 12a4 4 0 014-4h8a4 4 0 013.33 1.78A5.47 5.47 0 0014 9H6a3 3 0 100 6h3.02c.03.34.1.68.19 1H6a4 4 0 01-4-4zm8-1a1 1 0 01.23.03 5.5 5.5 0 00-.93 1.68A1 1 0 0110 11zm-4 2a1 1 0 100-2 1 1 0 000 2zm13 1.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.85-1.85l-2.65 2.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 00-.7-.7z" fill={primaryFill} /></svg>;
}

const ProductionCheckmarkRegular = wrapIcon(rawSvg({}), 'ProductionCheckmarkRegular');
export default ProductionCheckmarkRegular;
      