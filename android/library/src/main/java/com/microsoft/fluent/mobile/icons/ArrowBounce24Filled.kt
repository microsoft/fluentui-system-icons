package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowBounce24: ImageVector
  get() {
    if (_arrowBounce24 != null) {
      return _arrowBounce24!!
    }
    _arrowBounce24 = fluentIcon(name = "Filled.ArrowBounce24", 24f) {
      materialPath {
          moveTo(11.0F, 7.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.0F)
          curveTo(2.448F, 6.0F, 2.0F, 6.448F, 2.0F, 7.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(9.414F)
          lineToRelative(8.043F, 8.043F)
          curveToRelative(0.188F, 0.188F, 0.442F, 0.293F, 0.707F, 0.293F)
          curveToRelative(0.265F, 0.0F, 0.52F, -0.105F, 0.707F, -0.293F)
          lineToRelative(8.25F, -8.25F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineToRelative(-7.543F, 7.543F)
          lineTo(5.414F, 8.0F)
          horizontalLineTo(10.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          close()        
      }
    }
    return _arrowBounce24!!
  }

private var _arrowBounce24: ImageVector? = null
