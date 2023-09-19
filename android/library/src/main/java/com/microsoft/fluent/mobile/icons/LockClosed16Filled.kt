package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LockClosed16: ImageVector
  get() {
    if (_lockClosed16 != null) {
      return _lockClosed16!!
    }
    _lockClosed16 = fluentIcon(name = "Filled.LockClosed16", 16f) {
      materialPath {
          moveTo(7.832F, 1.755F)
          lineTo(8.0F, 1.75F)
          curveToRelative(1.463F, 0.0F, 2.658F, 1.142F, 2.745F, 2.582F)
          lineTo(10.75F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(0.75F)
          curveTo(12.328F, 5.0F, 13.0F, 5.672F, 13.0F, 6.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 14.0F, 3.0F, 13.328F, 3.0F, 12.5F)
          verticalLineToRelative(-6.0F)
          curveTo(3.0F, 5.672F, 3.672F, 5.0F, 4.5F, 5.0F)
          horizontalLineToRelative(0.75F)
          verticalLineTo(4.5F)
          curveToRelative(0.0F, -1.462F, 1.142F, -2.658F, 2.582F, -2.745F)
          lineTo(8.0F, 1.75F)
          lineTo(7.832F, 1.755F)
          close()
          moveTo(8.0F, 8.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveToRelative(0.128F, -5.244F)
          lineTo(8.0F, 3.25F)
          curveToRelative(-0.647F, 0.0F, -1.18F, 0.492F, -1.244F, 1.122F)
          lineTo(6.75F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(2.5F)
          verticalLineTo(4.5F)
          curveToRelative(0.0F, -0.647F, -0.492F, -1.18F, -1.122F, -1.244F)
          lineTo(8.0F, 3.25F)
          lineToRelative(0.128F, 0.006F)
          close()        
      }
    }
    return _lockClosed16!!
  }

private var _lockClosed16: ImageVector? = null
