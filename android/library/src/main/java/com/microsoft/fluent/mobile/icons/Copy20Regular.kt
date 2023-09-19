package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Copy20: ImageVector
  get() {
    if (_copy20 != null) {
      return _copy20!!
    }
    _copy20 = fluentIcon(name = "Regular.Copy20", 20f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(6.895F, 2.0F, 6.0F, 2.895F, 6.0F, 4.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(8.0F)
          close()
          moveTo(7.0F, 4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(4.0F)
          close()
          moveTo(4.0F, 6.0F)
          curveToRelative(0.0F, -0.74F, 0.402F, -1.387F, 1.0F, -1.732F)
          verticalLineTo(14.5F)
          curveTo(5.0F, 15.88F, 6.12F, 17.0F, 7.5F, 17.0F)
          horizontalLineToRelative(6.232F)
          curveToRelative(-0.345F, 0.598F, -0.992F, 1.0F, -1.732F, 1.0F)
          horizontalLineTo(7.5F)
          curveTo(5.567F, 18.0F, 4.0F, 16.433F, 4.0F, 14.5F)
          verticalLineTo(6.0F)
          close()        
      }
    }
    return _copy20!!
  }

private var _copy20: ImageVector? = null
