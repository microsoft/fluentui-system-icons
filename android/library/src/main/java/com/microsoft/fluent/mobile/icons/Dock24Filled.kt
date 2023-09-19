package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Dock24: ImageVector
  get() {
    if (_dock24 != null) {
      return _dock24!!
    }
    _dock24 = fluentIcon(name = "Filled.Dock24", 24f) {
      materialPath {
          moveTo(12.707F, 3.293F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineTo(11.0F, 6.414F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.414F)
          lineToRelative(1.793F, 1.793F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-3.5F, -3.5F)
          close()
          moveTo(4.0F, 12.75F)
          curveTo(4.0F, 12.336F, 4.336F, 12.0F, 4.75F, 12.0F)
          horizontalLineTo(9.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(4.75F)
          curveTo(3.231F, 10.0F, 2.0F, 11.231F, 2.0F, 12.75F)
          verticalLineToRelative(4.5F)
          curveTo(2.0F, 18.769F, 3.231F, 20.0F, 4.75F, 20.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineToRelative(-4.5F)
          curveToRelative(0.0F, -1.519F, -1.231F, -2.75F, -2.75F, -2.75F)
          horizontalLineTo(15.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(4.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(4.75F)
          curveTo(4.336F, 18.0F, 4.0F, 17.664F, 4.0F, 17.25F)
          verticalLineToRelative(-4.5F)
          close()        
      }
    }
    return _dock24!!
  }

private var _dock24: ImageVector? = null
