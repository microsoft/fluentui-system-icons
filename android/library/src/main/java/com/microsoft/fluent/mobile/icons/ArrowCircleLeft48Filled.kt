package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleLeft48: ImageVector
  get() {
    if (_arrowCircleLeft48 != null) {
      return _arrowCircleLeft48!!
    }
    _arrowCircleLeft48 = fluentIcon(name = "Filled.ArrowCircleLeft48", 48f) {
      materialPath {
          moveTo(44.0F, 24.0F)
          curveToRelative(0.0F, 11.046F, -8.954F, 20.0F, -20.0F, 20.0F)
          reflectiveCurveTo(4.0F, 35.046F, 4.0F, 24.0F)
          reflectiveCurveTo(12.954F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveToRelative(20.0F, 8.954F, 20.0F, 20.0F)
          close()
          moveToRelative(-19.866F, 8.634F)
          curveToRelative(0.488F, -0.488F, 0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-5.616F, -5.616F)
          horizontalLineTo(32.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(18.518F)
          lineToRelative(5.616F, -5.616F)
          curveToRelative(0.488F, -0.488F, 0.488F, -1.28F, 0.0F, -1.768F)
          reflectiveCurveToRelative(-1.28F, -0.488F, -1.768F, 0.0F)
          lineToRelative(-7.75F, 7.75F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(7.75F, 7.75F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          close()        
      }
    }
    return _arrowCircleLeft48!!
  }

private var _arrowCircleLeft48: ImageVector? = null
