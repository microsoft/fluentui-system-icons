package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleImage16: ImageVector
  get() {
    if (_circleImage16 != null) {
      return _circleImage16!!
    }
    _circleImage16 = fluentIcon(name = "Filled.CircleImage16", 16f) {
      materialPath {
          moveTo(8.0F, 5.0F)
          horizontalLineToRelative(2.744F)
          curveTo(10.126F, 3.252F, 8.459F, 2.0F, 6.5F, 2.0F)
          curveTo(4.015F, 2.0F, 2.0F, 4.015F, 2.0F, 6.5F)
          curveToRelative(0.0F, 1.96F, 1.252F, 3.626F, 3.0F, 4.244F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(6.895F, 6.0F, 6.0F, 6.895F, 6.0F, 8.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.37F, 0.101F, 0.718F, 0.277F, 1.016F)
          lineToRelative(2.486F, -2.486F)
          curveToRelative(0.683F, -0.683F, 1.791F, -0.683F, 2.474F, 0.0F)
          lineToRelative(2.486F, 2.486F)
          curveTo(13.9F, 12.718F, 14.0F, 12.371F, 14.0F, 12.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(0.0F, 8.0F)
          curveToRelative(-0.37F, 0.0F, -0.718F, -0.101F, -1.016F, -0.277F)
          lineToRelative(2.486F, -2.486F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(2.486F, 2.486F)
          curveTo(12.718F, 13.9F, 12.371F, 14.0F, 12.0F, 14.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(3.5F, -4.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          close()        
      }
    }
    return _circleImage16!!
  }

private var _circleImage16: ImageVector? = null
