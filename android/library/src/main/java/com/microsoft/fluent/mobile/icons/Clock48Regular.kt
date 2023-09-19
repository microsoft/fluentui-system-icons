package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Clock48: ImageVector
  get() {
    if (_clock48 != null) {
      return _clock48!!
    }
    _clock48 = fluentIcon(name = "Regular.Clock48", 48f) {
      materialPath {
          moveTo(24.0F, 5.0F)
          curveToRelative(10.493F, 0.0F, 19.0F, 8.507F, 19.0F, 19.0F)
          reflectiveCurveToRelative(-8.507F, 19.0F, -19.0F, 19.0F)
          reflectiveCurveTo(5.0F, 34.493F, 5.0F, 24.0F)
          reflectiveCurveTo(13.507F, 5.0F, 24.0F, 5.0F)
          close()
          moveToRelative(0.0F, 2.5F)
          curveTo(14.887F, 7.5F, 7.5F, 14.887F, 7.5F, 24.0F)
          reflectiveCurveTo(14.887F, 40.5F, 24.0F, 40.5F)
          reflectiveCurveTo(40.5F, 33.113F, 40.5F, 24.0F)
          reflectiveCurveTo(33.113F, 7.5F, 24.0F, 7.5F)
          close()
          moveTo(22.75F, 12.0F)
          curveToRelative(0.647F, 0.0F, 1.18F, 0.492F, 1.244F, 1.122F)
          lineTo(24.0F, 13.25F)
          verticalLineTo(24.0F)
          horizontalLineToRelative(6.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          curveToRelative(0.0F, 0.647F, -0.492F, 1.18F, -1.122F, 1.244F)
          lineTo(30.75F, 26.5F)
          horizontalLineToRelative(-8.0F)
          curveToRelative(-0.647F, 0.0F, -1.18F, -0.492F, -1.244F, -1.122F)
          lineTo(21.5F, 25.25F)
          verticalLineToRelative(-12.0F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          close()        
      }
    }
    return _clock48!!
  }

private var _clock48: ImageVector? = null
