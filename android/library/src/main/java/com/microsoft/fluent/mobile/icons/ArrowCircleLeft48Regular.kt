package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleLeft48: ImageVector
  get() {
    if (_arrowCircleLeft48 != null) {
      return _arrowCircleLeft48!!
    }
    _arrowCircleLeft48 = fluentIcon(name = "Regular.ArrowCircleLeft48", 48f) {
      materialPath {
          moveTo(24.134F, 32.634F)
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
          moveTo(24.0F, 44.0F)
          curveToRelative(11.046F, 0.0F, 20.0F, -8.954F, 20.0F, -20.0F)
          reflectiveCurveTo(35.046F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveTo(4.0F, 12.954F, 4.0F, 24.0F)
          reflectiveCurveToRelative(8.954F, 20.0F, 20.0F, 20.0F)
          close()
          moveToRelative(17.5F, -20.0F)
          curveToRelative(0.0F, 9.665F, -7.835F, 17.5F, -17.5F, 17.5F)
          reflectiveCurveTo(6.5F, 33.665F, 6.5F, 24.0F)
          reflectiveCurveTo(14.335F, 6.5F, 24.0F, 6.5F)
          reflectiveCurveTo(41.5F, 14.335F, 41.5F, 24.0F)
          close()        
      }
    }
    return _arrowCircleLeft48!!
  }

private var _arrowCircleLeft48: ImageVector? = null
