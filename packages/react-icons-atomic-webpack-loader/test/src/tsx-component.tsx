import { AddFilled, ArrowLeftRegular } from '@fluentui/react-icons';

interface Props {
  size: number;
}

const App = ({ size }: Props) => (
  <div style={{ fontSize: size }}>
    <AddFilled />
    <ArrowLeftRegular />
  </div>
);

console.log(App);
