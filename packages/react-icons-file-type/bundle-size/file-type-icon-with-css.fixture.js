// The icon WITH its stylesheet — what a consumer actually pays. `file-type-icon` measures the
// JS in isolation; without this twin the mandatory `.css` import would be unmeasured, and the
// choice between inlining it (`style-loader`) and extracting it (`MiniCssExtractPlugin`) is
// the only bundle-size decision left in this package.
import '@fluentui/react-icons-file-type/styles.css';
import { FileTypeIcon } from '@fluentui/react-icons-file-type';

console.log(FileTypeIcon);

export default { name: 'FileTypeIcon + CSS' };
