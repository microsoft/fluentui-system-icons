package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clock20: ImageVector
  get() {
    if (_clock20 != null) {
      return _clock20!!
    }
    _clock20 = fluentIcon(name = "Filled.Clock20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          close()
          moveTo(9.5F, 5.0F)
          curveTo(9.224F, 5.0F, 9.0F, 5.224F, 9.0F, 5.5F)
          verticalLineToRelative(5.0F)
          lineToRelative(0.008F, 0.09F)
          curveTo(9.05F, 10.823F, 9.255F, 11.0F, 9.5F, 11.0F)
          horizontalLineToRelative(3.0F)
          lineToRelative(0.09F, -0.008F)
          curveTo(12.823F, 10.95F, 13.0F, 10.745F, 13.0F, 10.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(10.0F)
          verticalLineTo(5.5F)
          lineTo(9.992F, 5.41F)
          curveTo(9.95F, 5.177F, 9.745F, 5.0F, 9.5F, 5.0F)
          close()        
      }
    }
    return _clock20!!
  }

private var _clock20: ImageVector? = null
