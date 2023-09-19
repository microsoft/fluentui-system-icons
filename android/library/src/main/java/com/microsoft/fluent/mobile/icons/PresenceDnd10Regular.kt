package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceDnd10: ImageVector
  get() {
    if (_presenceDnd10 != null) {
      return _presenceDnd10!!
    }
    _presenceDnd10 = fluentIcon(name = "Regular.PresenceDnd10", 10f) {
      materialPath {
          moveTo(4.998F, 0.0F)
          curveTo(2.238F, 0.0F, 0.0F, 2.237F, 0.0F, 4.998F)
          curveToRelative(0.0F, 2.76F, 2.237F, 4.997F, 4.998F, 4.997F)
          curveToRelative(2.76F, 0.0F, 4.997F, -2.237F, 4.997F, -4.997F)
          reflectiveCurveTo(7.758F, 0.0F, 4.998F, 0.0F)
          close()
          moveTo(1.0F, 4.998F)
          curveTo(1.0F, 2.79F, 2.79F, 1.0F, 4.998F, 1.0F)
          reflectiveCurveToRelative(3.997F, 1.79F, 3.997F, 3.998F)
          reflectiveCurveToRelative(-1.79F, 3.997F, -3.997F, 3.997F)
          curveTo(2.79F, 8.995F, 1.0F, 7.205F, 1.0F, 4.998F)
          close()
          moveTo(3.0F, 5.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(3.0F)
          curveTo(6.776F, 4.5F, 7.0F, 4.724F, 7.0F, 5.0F)
          reflectiveCurveTo(6.776F, 5.5F, 6.5F, 5.5F)
          horizontalLineToRelative(-3.0F)
          curveTo(3.224F, 5.5F, 3.0F, 5.276F, 3.0F, 5.0F)
          close()        
      }
    }
    return _presenceDnd10!!
  }

private var _presenceDnd10: ImageVector? = null
