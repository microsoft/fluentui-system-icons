import { AirplaneFilled, AirplaneRegular } from '@fluentui/react-icons/headless/svg/airplane';
import { bundleIcon } from '@fluentui/react-icons/headless/utils';

const Airplane = bundleIcon(AirplaneFilled, AirplaneRegular);

console.log(Airplane);

export default { name: 'Headless - Bundle Icon' };
