package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Checkmark28: ImageVector
  get() {
    if (_checkmark28 != null) {
      return _checkmark28!!
    }
    _checkmark28 = fluentIcon(name = "Regular.Checkmark28", 28f) {
      materialPath {
          moveTo(4.03F, 13.47F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(7.0F, 7.0F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(14.0F, -14.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(10.5F, 19.94F)
          lineToRelative(-6.47F, -6.47F)
          close()        
      }
    }
    return _checkmark28!!
  }

private var _checkmark28: ImageVector? = null
