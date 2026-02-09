import * as React from 'react';

import { AirplaneRegular,AirplaneFilled } from '@fluentui/react-icons/svg-sprite/airplane';
import { AlertFilled } from '@fluentui/react-icons/svg-sprite/alert';
import { CalendarWorkWeekRegular } from '@fluentui/react-icons/svg-sprite/calendar-work-week';
import { CalculatorFilled } from '@fluentui/react-icons/svg-sprite/calculator';
import { BackspaceFilled } from '@fluentui/react-icons/svg-sprite/backspace';
import { BackpackFilled } from '@fluentui/react-icons/svg-sprite/backpack';

/**
 * Example usage of SvgIcon component
 */
export const SvgSpritesApiExamples: React.FC = () => {
  return (
    <section style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
      <h3>SVG Sprites API</h3>
      {/* Basic usage with default size (1em) */}
      <AirplaneRegular />

      {/* Custom size */}
      <AirplaneRegular fontSize="24" />
      {/* With custom fill color */}
      <BackpackFilled primaryFill="blue" fontSize="32" />

      {/* Size-specific icon variants */}

      <AirplaneFilled/>

      {/* With RTL support */}
      <CalendarWorkWeekRegular />

      {/* With accessibility title */}
      <AlertFilled title="Alert" fontSize="20" />

      {/* With custom className */}
      <CalculatorFilled className="my-custom-class" />

      {/* Custom sprite path */}
      <BackspaceFilled />
    </section>
  );
};

/**
 * Comparison: '/svg-sprite/*' vs '/svg/*' API
 *
 * Before (using createFluentIcon - renders inline paths - they live in JS):
 * import { CalendarFilled } from '@fluentui/react-icons/svg/calendar';
 * <CalendarFilled />
 *
 * After (using createFluentIcon from utils/svg-icon - uses static svg sprite):
 * import { CalendarFilled } from '@fluentui/react-icons/svg-sprite/calendar';
 * <CalendarFilled />
 *
 *
 * Benefits of `svg-icon` approach:
 * - Smaller bundle size (no inline SVG paths in JS)
 * - Better caching (sprite can be cached by browser)
 * - All icons available under same API as /svg/* api
 * - Same styling and behavior as createFluentIcon
 */
