package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pentagon32: ImageVector
  get() {
    if (_pentagon32 != null) {
      return _pentagon32!!
    }
    _pentagon32 = fluentIcon(name = "Regular.Pentagon32", 32f) {
      materialPath {
          moveTo(14.09F, 2.602F)
          curveToRelative(1.139F, -0.827F, 2.681F, -0.827F, 3.82F, 0.0F)
          lineToRelative(10.242F, 7.441F)
          curveToRelative(1.139F, 0.828F, 1.616F, 2.295F, 1.18F, 3.634F)
          lineToRelative(-3.912F, 12.04F)
          curveToRelative(-0.435F, 1.339F, -1.682F, 2.245F, -3.09F, 2.245F)
          horizontalLineTo(9.67F)
          curveToRelative(-1.408F, 0.0F, -2.656F, -0.906F, -3.09F, -2.245F)
          lineToRelative(-3.913F, -12.04F)
          curveToRelative(-0.435F, -1.34F, 0.042F, -2.806F, 1.18F, -3.634F)
          lineToRelative(10.242F, -7.44F)
          close()
          moveToRelative(2.645F, 1.618F)
          curveToRelative(-0.439F, -0.318F, -1.032F, -0.318F, -1.47F, 0.0F)
          lineTo(5.023F, 11.661F)
          curveTo(4.585F, 11.98F, 4.402F, 12.544F, 4.57F, 13.06F)
          lineTo(8.482F, 25.1F)
          curveToRelative(0.168F, 0.515F, 0.648F, 0.863F, 1.189F, 0.863F)
          horizontalLineToRelative(12.66F)
          curveToRelative(0.541F, 0.0F, 1.021F, -0.348F, 1.188F, -0.863F)
          lineToRelative(3.912F, -12.04F)
          curveToRelative(0.168F, -0.515F, -0.016F, -1.08F, -0.454F, -1.398F)
          lineToRelative(-10.241F, -7.44F)
          close()        
      }
    }
    return _pentagon32!!
  }

private var _pentagon32: ImageVector? = null
