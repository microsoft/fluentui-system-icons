package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Delete24: ImageVector
  get() {
    if (_delete24 != null) {
      return _delete24!!
    }
    _delete24 = fluentIcon(name = "Regular.Delete24", 24f) {
      materialPath {
          moveTo(10.0F, 5.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          close()
          moveTo(8.5F, 5.0F)
          curveToRelative(0.0F, -1.933F, 1.567F, -3.5F, 3.5F, -3.5F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          horizontalLineToRelative(5.75F)
          curveTo(21.664F, 5.0F, 22.0F, 5.336F, 22.0F, 5.75F)
          reflectiveCurveTo(21.664F, 6.5F, 21.25F, 6.5F)
          horizontalLineToRelative(-1.32F)
          lineToRelative(-1.17F, 12.111F)
          curveTo(18.573F, 20.533F, 16.957F, 22.0F, 15.026F, 22.0F)
          horizontalLineTo(8.974F)
          curveToRelative(-1.931F, 0.0F, -3.547F, -1.467F, -3.733F, -3.389F)
          lineTo(4.07F, 6.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 6.5F, 2.0F, 6.164F, 2.0F, 5.75F)
          reflectiveCurveTo(2.336F, 5.0F, 2.75F, 5.0F)
          horizontalLineTo(8.5F)
          close()
          moveToRelative(2.0F, 4.75F)
          curveTo(10.5F, 9.336F, 10.164F, 9.0F, 9.75F, 9.0F)
          reflectiveCurveTo(9.0F, 9.336F, 9.0F, 9.75F)
          verticalLineToRelative(7.5F)
          curveTo(9.0F, 17.664F, 9.336F, 18.0F, 9.75F, 18.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-7.5F)
          close()
          moveTo(14.25F, 9.0F)
          curveTo(14.664F, 9.0F, 15.0F, 9.336F, 15.0F, 9.75F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-7.5F)
          curveTo(13.5F, 9.336F, 13.836F, 9.0F, 14.25F, 9.0F)
          close()
          moveToRelative(-7.516F, 9.467F)
          curveTo(6.846F, 19.62F, 7.815F, 20.5F, 8.974F, 20.5F)
          horizontalLineToRelative(6.052F)
          curveToRelative(1.159F, 0.0F, 2.128F, -0.88F, 2.24F, -2.033F)
          lineTo(18.424F, 6.5F)
          horizontalLineTo(5.576F)
          lineToRelative(1.158F, 11.967F)
          close()        
      }
    }
    return _delete24!!
  }

private var _delete24: ImageVector? = null
