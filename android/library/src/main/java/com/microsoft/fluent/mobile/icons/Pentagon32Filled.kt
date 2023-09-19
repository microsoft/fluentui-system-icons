package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pentagon32: ImageVector
  get() {
    if (_pentagon32 != null) {
      return _pentagon32!!
    }
    _pentagon32 = fluentIcon(name = "Filled.Pentagon32", 32f) {
      materialPath {
          moveTo(17.91F, 2.602F)
          curveToRelative(-1.139F, -0.827F, -2.681F, -0.827F, -3.82F, 0.0F)
          lineTo(3.847F, 10.043F)
          curveToRelative(-1.14F, 0.828F, -1.616F, 2.295F, -1.18F, 3.634F)
          lineToRelative(3.911F, 12.04F)
          curveToRelative(0.435F, 1.339F, 1.683F, 2.245F, 3.091F, 2.245F)
          horizontalLineToRelative(12.66F)
          curveToRelative(1.408F, 0.0F, 2.655F, -0.906F, 3.09F, -2.245F)
          lineToRelative(3.912F, -12.04F)
          curveToRelative(0.436F, -1.34F, -0.041F, -2.806F, -1.18F, -3.634F)
          lineTo(17.91F, 2.603F)
          close()        
      }
    }
    return _pentagon32!!
  }

private var _pentagon32: ImageVector? = null
