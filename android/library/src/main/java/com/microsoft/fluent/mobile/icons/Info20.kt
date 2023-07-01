package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Info20: ImageVector
  get() {
    if (_info20 != null) {
      return _info20!!
    }
    _info20 = fluentIcon(name = "Filled.Info20", 20f) {
      materialPath {
          moveTo(18.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, -3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          close()
          moveTo(9.508F, 8.91F)
          curveTo(9.55F, 8.677F, 9.755F, 8.5F, 10.0F, 8.5F)
          reflectiveCurveToRelative(0.45F, 0.177F, 0.492F, 0.41F)
          lineTo(10.5F, 9.0F)
          verticalLineToRelative(4.502F)
          lineToRelative(-0.008F, 0.09F)
          curveToRelative(-0.042F, 0.233F, -0.247F, 0.41F, -0.492F, 0.41F)
          reflectiveCurveToRelative(-0.45F, -0.177F, -0.492F, -0.41F)
          lineTo(9.5F, 13.502F)
          verticalLineTo(9.0F)
          lineToRelative(0.008F, -0.09F)
          close()
          moveTo(9.25F, 6.75F)
          curveTo(9.25F, 6.336F, 9.586F, 6.0F, 10.0F, 6.0F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(10.414F, 7.5F, 10.0F, 7.5F)
          reflectiveCurveTo(9.25F, 7.164F, 9.25F, 6.75F)
          close()        
      }
    }
    return _info20!!
  }

private var _info20: ImageVector? = null
