package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Info20: ImageVector
  get() {
    if (_info20 != null) {
      return _info20!!
    }
    _info20 = fluentIcon(name = "Regular.Info20", 20f) {
      materialPath {
          moveTo(10.492F, 8.91F)
          curveTo(10.45F, 8.677F, 10.246F, 8.5F, 10.0F, 8.5F)
          curveTo(9.724F, 8.5F, 9.5F, 8.724F, 9.5F, 9.0F)
          verticalLineToRelative(4.502F)
          lineToRelative(0.008F, 0.09F)
          curveToRelative(0.043F, 0.233F, 0.247F, 0.41F, 0.492F, 0.41F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(9.0F)
          lineToRelative(-0.008F, -0.09F)
          close()
          moveTo(10.8F, 6.75F)
          curveTo(10.8F, 6.336F, 10.464F, 6.0F, 10.05F, 6.0F)
          reflectiveCurveTo(9.3F, 6.336F, 9.3F, 6.75F)
          reflectiveCurveTo(9.636F, 7.5F, 10.05F, 7.5F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          close()
          moveTo(18.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, -3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          close()
          moveTo(3.0F, 10.0F)
          curveToRelative(0.0F, -3.866F, 3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          close()        
      }
    }
    return _info20!!
  }

private var _info20: ImageVector? = null
