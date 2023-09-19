package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PaddingTop20: ImageVector
  get() {
    if (_paddingTop20 != null) {
      return _paddingTop20!!
    }
    _paddingTop20 = fluentIcon(name = "Filled.PaddingTop20", 20f) {
      materialPath {
          moveTo(3.75F, 2.75F)
          curveTo(3.75F, 2.336F, 4.086F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(1.313F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(6.226F, 3.5F, 5.813F, 3.5F)
          horizontalLineTo(4.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveToRelative(3.938F, 0.0F)
          curveTo(7.688F, 2.336F, 8.023F, 2.0F, 8.438F, 2.0F)
          horizontalLineToRelative(2.624F)
          curveToRelative(0.415F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.335F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(8.438F)
          curveToRelative(-0.415F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveToRelative(5.25F, 0.0F)
          curveToRelative(0.0F, -0.414F, 0.335F, -0.75F, 0.75F, -0.75F)
          horizontalLineTo(15.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(15.414F, 3.5F, 15.0F, 3.5F)
          horizontalLineToRelative(-1.313F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveTo(3.75F, 17.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineTo(15.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(15.414F, 18.0F, 15.0F, 18.0F)
          horizontalLineTo(4.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveToRelative(6.53F, -12.53F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(4.97F, 8.97F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(9.0F, 7.06F)
          verticalLineToRelative(7.19F)
          curveTo(9.0F, 14.664F, 9.336F, 15.0F, 9.75F, 15.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(7.06F)
          lineToRelative(2.97F, 2.97F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-4.25F, -4.25F)
          close()        
      }
    }
    return _paddingTop20!!
  }

private var _paddingTop20: ImageVector? = null
