import {createGlobalStyle} from 'styled-components';
import eot from './iconfont.eot?t=1645878105493'
import eotIefix from './iconfont.eot?t=1645878105493#iefix'
import woff from './iconfont.woff?t=1645878105493'
import truetype from './iconfont.ttf?t=1645878105493'
import svg from './iconfont.svg?t=1645878105493#iconfont'

const IconFontStyle = createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 3207338 */
  src: url('${eot}'); /* IE9 */
  src: url('${eotIefix}') format('embedded-opentype'), /* IE6-IE8 */
       url('${woff}') format('woff'),
       url('${truetype}') format('truetype'),
       url('${svg}') format('svg');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-fangdajing:before {
  content: "\e6e4";
}

.icon-Aa:before {
  content: "\e636";
}

.icon-Pensyumaobi:before {
  content: "\e708";
}
`;

export default IconFontStyle;