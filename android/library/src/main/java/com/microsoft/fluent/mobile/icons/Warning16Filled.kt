package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Warning16: ImageVector
  get() {
    if (_warning16 != null) {
      return _warning16!!
    }
    _warning16 = fluentIcon(name = "Filled.Warning16", 16f) {
      materialPath {
          moveTo(9.092F, 2.638F)
          curveToRelative(-0.477F, -0.853F, -1.705F, -0.853F, -2.182F, 0.0F)
          lineTo(2.157F, 11.14F)
          curveTo(1.69F, 11.973F, 2.293F, 13.0F, 3.247F, 13.0F)
          horizontalLineToRelative(9.504F)
          curveToRelative(0.955F, 0.0F, 1.557F, -1.027F, 1.091F, -1.86F)
          lineToRelative(-4.75F, -8.502F)
          close()
          moveTo(8.75F, 10.25F)
          curveTo(8.75F, 10.664F, 8.414F, 11.0F, 8.0F, 11.0F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(7.586F, 9.5F, 8.0F, 9.5F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          close()
          moveTo(7.5F, 8.0F)
          verticalLineTo(5.5F)
          curveTo(7.5F, 5.224F, 7.724F, 5.0F, 8.0F, 5.0F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(7.5F, 8.276F, 7.5F, 8.0F)
          close()        
      }
    }
    return _warning16!!
  }

private var _warning16: ImageVector? = null
