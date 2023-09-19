package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowClockwise28: ImageVector
  get() {
    if (_arrowClockwise28 != null) {
      return _arrowClockwise28!!
    }
    _arrowClockwise28 = fluentIcon(name = "Regular.ArrowClockwise28", 28f) {
      materialPath {
          moveTo(19.832F, 6.5F)
          curveToRelative(-1.61F, -1.254F, -3.634F, -2.0F, -5.832F, -2.0F)
          curveToRelative(-5.247F, 0.0F, -9.5F, 4.253F, -9.5F, 9.5F)
          reflectiveCurveToRelative(4.253F, 9.5F, 9.5F, 9.5F)
          reflectiveCurveToRelative(9.5F, -4.253F, 9.5F, -9.5F)
          curveToRelative(0.0F, -0.452F, -0.03F, -0.659F, -0.1F, -1.139F)
          lineToRelative(-0.001F, -0.002F)
          curveToRelative(-0.06F, -0.41F, 0.223F, -0.791F, 0.633F, -0.851F)
          curveToRelative(0.41F, -0.06F, 0.791F, 0.223F, 0.851F, 0.633F)
          lineToRelative(0.002F, 0.012F)
          curveTo(24.957F, 13.143F, 25.0F, 13.438F, 25.0F, 14.0F)
          curveToRelative(0.0F, 6.075F, -4.925F, 11.0F, -11.0F, 11.0F)
          reflectiveCurveTo(3.0F, 20.075F, 3.0F, 14.0F)
          reflectiveCurveTo(7.925F, 3.0F, 14.0F, 3.0F)
          curveToRelative(2.66F, 0.0F, 5.099F, 0.944F, 7.0F, 2.514F)
          verticalLineTo(3.75F)
          curveTo(21.0F, 3.336F, 21.336F, 3.0F, 21.75F, 3.0F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(3.5F)
          curveTo(22.5F, 7.664F, 22.164F, 8.0F, 21.75F, 8.0F)
          horizontalLineToRelative(-3.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(1.582F)
          close()        
      }
    }
    return _arrowClockwise28!!
  }

private var _arrowClockwise28: ImageVector? = null
