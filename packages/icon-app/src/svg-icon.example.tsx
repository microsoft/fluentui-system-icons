import * as React from 'react';
import { SvgIcon } from '@fluentui/react-icons/utils';
import spritePath from './svg-sprite.svg'

/**
 * Example usage of SvgIcon component
 */
export const SvgIconExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
      {/* Basic usage with default size (1em) */}
      <SvgIcon iconId="AirplaneRegular" spritePath={spritePath} />

      {/* Custom size */}
      <SvgIcon iconId="AirplaneRegular" size="24" spritePath={spritePath} />

      {/* With custom fill color */}
      <SvgIcon iconId="BackpackFilled" primaryFill="blue" size="32" spritePath={spritePath} />

      {/* Size-specific icon variants */}
      {/* <SvgIcon iconId="Airplane16Filled" size="16" spritePath={spritePath} />
      <SvgIcon iconId="Airplane20Filled" size="20" spritePath={spritePath} />
      <SvgIcon iconId="Airplane24Filled" size="24" spritePath={spritePath} /> */}
      <SvgIcon iconId="AirplaneFilled" spritePath={spritePath} />

      {/* With RTL support */}
      <SvgIcon iconId="CalendarWorkWeekRegular" flipInRtl spritePath={spritePath} />

      {/* With accessibility title */}
      <SvgIcon iconId="AlertFilled" title="Alert" size="20" spritePath={spritePath} />

      {/* With custom className */}
      <SvgIcon iconId="CalculatorFilled" className="my-custom-class" spritePath={spritePath} />

      {/* Custom sprite path */}
      <SvgIcon iconId="BackspaceFilled" size="20" spritePath={spritePath}/>
    </div>
  );
};

/**
 * Comparison: SvgIcon vs createFluentIcon
 *
 * Before (using createFluentIcon - renders inline paths):
 * import { CalendarFilled } from '@fluentui/react-icons';
 * <CalendarFilled />
 *
 * After (using SvgIcon - uses sprite):
 * import { SvgIcon } from '@fluentui/react-icons';
 * <SvgIcon iconId="CalendarFilled" />
 *
 * Benefits of SvgIcon:
 * - Smaller bundle size (no inline SVG paths in JS)
 * - Better caching (sprite can be cached by browser)
 * - All icons available without importing each one
 * - Same styling and behavior as createFluentIcon
 */
