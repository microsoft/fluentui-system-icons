package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PaddingRight20: ImageVector
  get() {
    if (_paddingRight20 != null) {
      return _paddingRight20!!
    }
    _paddingRight20 = fluentIcon(name = "Filled.PaddingRight20", 20f) {
      materialPath {
          moveTo(2.75F, 3.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(2.0F, 15.414F, 2.0F, 15.0F)
          verticalLineTo(4.5F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          close()
          moveToRelative(14.5F, 0.0F)
          curveTo(17.664F, 3.75F, 18.0F, 4.086F, 18.0F, 4.5F)
          verticalLineToRelative(1.313F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(4.5F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          close()
          moveToRelative(0.0F, 3.938F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.335F, 0.75F, 0.75F)
          verticalLineToRelative(2.624F)
          curveToRelative(0.0F, 0.415F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.335F, -0.75F, -0.75F)
          verticalLineTo(8.438F)
          curveToRelative(0.0F, -0.415F, 0.336F, -0.75F, 0.75F, -0.75F)
          close()
          moveToRelative(0.0F, 5.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.335F, 0.75F, 0.75F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(16.5F, 15.414F, 16.5F, 15.0F)
          verticalLineToRelative(-1.313F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          close()
          moveToRelative(-1.97F, -2.658F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-4.25F, -4.25F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(12.94F, 9.0F)
          horizontalLineTo(5.75F)
          curveTo(5.336F, 9.0F, 5.0F, 9.336F, 5.0F, 9.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(7.19F)
          lineToRelative(-2.97F, 2.97F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(4.25F, -4.25F)
          close()        
      }
    }
    return _paddingRight20!!
  }

private var _paddingRight20: ImageVector? = null
