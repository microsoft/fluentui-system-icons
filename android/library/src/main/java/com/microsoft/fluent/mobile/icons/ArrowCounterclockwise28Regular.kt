package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCounterclockwise28: ImageVector
  get() {
    if (_arrowCounterclockwise28 != null) {
      return _arrowCounterclockwise28!!
    }
    _arrowCounterclockwise28 = fluentIcon(name = "Regular.ArrowCounterclockwise28", 28f) {
      materialPath {
          moveTo(8.168F, 6.5F)
          curveToRelative(1.61F, -1.254F, 3.634F, -2.0F, 5.832F, -2.0F)
          curveToRelative(5.247F, 0.0F, 9.5F, 4.253F, 9.5F, 9.5F)
          reflectiveCurveToRelative(-4.253F, 9.5F, -9.5F, 9.5F)
          reflectiveCurveToRelative(-9.5F, -4.253F, -9.5F, -9.5F)
          curveToRelative(0.0F, -0.452F, 0.03F, -0.659F, 0.1F, -1.139F)
          lineToRelative(0.001F, -0.002F)
          curveToRelative(0.06F, -0.41F, -0.223F, -0.791F, -0.633F, -0.851F)
          curveToRelative(-0.41F, -0.06F, -0.791F, 0.223F, -0.851F, 0.633F)
          lineToRelative(-0.002F, 0.012F)
          curveTo(3.043F, 13.143F, 3.0F, 13.438F, 3.0F, 14.0F)
          curveToRelative(0.0F, 6.075F, 4.925F, 11.0F, 11.0F, 11.0F)
          reflectiveCurveToRelative(11.0F, -4.925F, 11.0F, -11.0F)
          reflectiveCurveTo(20.075F, 3.0F, 14.0F, 3.0F)
          curveToRelative(-2.66F, 0.0F, -5.098F, 0.944F, -7.0F, 2.514F)
          verticalLineTo(3.75F)
          curveTo(7.0F, 3.336F, 6.664F, 3.0F, 6.25F, 3.0F)
          reflectiveCurveTo(5.5F, 3.336F, 5.5F, 3.75F)
          verticalLineToRelative(3.5F)
          curveTo(5.5F, 7.664F, 5.836F, 8.0F, 6.25F, 8.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(10.164F, 6.5F, 9.75F, 6.5F)
          horizontalLineTo(8.168F)
          close()        
      }
    }
    return _arrowCounterclockwise28!!
  }

private var _arrowCounterclockwise28: ImageVector? = null
