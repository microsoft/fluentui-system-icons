package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PaddingDown20: ImageVector
  get() {
    if (_paddingDown20 != null) {
      return _paddingDown20!!
    }
    _paddingDown20 = fluentIcon(name = "Filled.PaddingDown20", 20f) {
      materialPath {
          moveTo(3.75F, 2.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineTo(15.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(15.414F, 2.0F, 15.0F, 2.0F)
          horizontalLineTo(4.5F)
          curveTo(4.086F, 2.0F, 3.75F, 2.336F, 3.75F, 2.75F)
          close()
          moveToRelative(0.0F, 14.5F)
          curveTo(3.75F, 17.664F, 4.086F, 18.0F, 4.5F, 18.0F)
          horizontalLineToRelative(1.313F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(4.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          close()
          moveToRelative(3.938F, 0.0F)
          curveToRelative(0.0F, 0.414F, 0.335F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(2.624F)
          curveToRelative(0.415F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.335F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(8.438F)
          curveToRelative(-0.415F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          close()
          moveToRelative(5.25F, 0.0F)
          curveToRelative(0.0F, 0.414F, 0.335F, 0.75F, 0.75F, 0.75F)
          horizontalLineTo(15.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(15.414F, 16.5F, 15.0F, 16.5F)
          horizontalLineToRelative(-1.313F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          close()
          moveToRelative(-2.658F, -1.97F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-4.25F, -4.25F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(9.0F, 12.94F)
          verticalLineTo(5.75F)
          curveTo(9.0F, 5.336F, 9.336F, 5.0F, 9.75F, 5.0F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(7.19F)
          lineToRelative(2.97F, -2.97F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-4.25F, 4.25F)
          close()        
      }
    }
    return _paddingDown20!!
  }

private var _paddingDown20: ImageVector? = null
