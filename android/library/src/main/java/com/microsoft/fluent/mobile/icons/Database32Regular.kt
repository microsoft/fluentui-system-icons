package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Database32: ImageVector
  get() {
    if (_database32 != null) {
      return _database32!!
    }
    _database32 = fluentIcon(name = "Regular.Database32", 32f) {
      materialPath {
          moveTo(27.0F, 7.0F)
          curveToRelative(0.0F, -2.761F, -4.925F, -5.0F, -11.0F, -5.0F)
          reflectiveCurveTo(5.0F, 4.239F, 5.0F, 7.0F)
          verticalLineToRelative(18.0F)
          curveToRelative(0.0F, 2.761F, 4.925F, 5.0F, 11.0F, 5.0F)
          reflectiveCurveToRelative(11.0F, -2.239F, 11.0F, -5.0F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(-2.0F, 0.0F)
          curveToRelative(0.0F, 0.114F, -0.193F, 0.871F, -2.05F, 1.715F)
          curveTo(21.276F, 9.476F, 18.82F, 10.0F, 16.0F, 10.0F)
          curveToRelative(-2.82F, 0.0F, -5.275F, -0.524F, -6.95F, -1.285F)
          curveTo(7.192F, 7.87F, 7.0F, 7.115F, 7.0F, 7.0F)
          curveToRelative(0.0F, -0.114F, 0.193F, -0.871F, 2.05F, -1.715F)
          curveTo(10.724F, 4.524F, 13.18F, 4.0F, 16.0F, 4.0F)
          curveToRelative(2.82F, 0.0F, 5.275F, 0.524F, 6.95F, 1.285F)
          curveTo(24.808F, 6.13F, 25.0F, 6.885F, 25.0F, 7.0F)
          close()
          moveToRelative(0.0F, 2.876F)
          verticalLineTo(25.0F)
          curveToRelative(0.0F, 0.114F, -0.193F, 0.871F, -2.05F, 1.715F)
          curveTo(21.276F, 27.477F, 18.82F, 28.0F, 16.0F, 28.0F)
          curveToRelative(-2.82F, 0.0F, -5.275F, -0.523F, -6.95F, -1.285F)
          curveTo(7.192F, 25.87F, 7.0F, 25.115F, 7.0F, 25.0F)
          verticalLineTo(9.876F)
          curveTo(8.99F, 11.16F, 12.28F, 12.0F, 16.0F, 12.0F)
          curveToRelative(3.72F, 0.0F, 7.01F, -0.84F, 9.0F, -2.124F)
          close()        
      }
    }
    return _database32!!
  }

private var _database32: ImageVector? = null
