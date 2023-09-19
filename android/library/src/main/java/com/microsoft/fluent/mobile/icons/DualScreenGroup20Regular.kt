package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DualScreenGroup20: ImageVector
  get() {
    if (_dualScreenGroup20 != null) {
      return _dualScreenGroup20!!
    }
    _dualScreenGroup20 = fluentIcon(name = "Regular.DualScreenGroup20", 20f) {
      materialPath {
          moveTo(4.0F, 4.0F)
          curveTo(2.895F, 4.0F, 2.0F, 4.895F, 2.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(5.5F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(7.5F, 9.0F)
          verticalLineTo(5.0F)
          horizontalLineTo(16.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-5.5F)
          close()        
      }
    }
    return _dualScreenGroup20!!
  }

private var _dualScreenGroup20: ImageVector? = null
