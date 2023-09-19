package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDown32: ImageVector
  get() {
    if (_arrowDown32 != null) {
      return _arrowDown32!!
    }
    _arrowDown32 = fluentIcon(name = "Regular.ArrowDown32", 32f) {
      materialPath {
          moveTo(16.0F, 3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(21.586F)
          lineToRelative(8.293F, -8.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(-10.0F, 10.0F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-10.0F, -10.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineTo(15.0F, 25.586F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _arrowDown32!!
  }

private var _arrowDown32: ImageVector? = null
