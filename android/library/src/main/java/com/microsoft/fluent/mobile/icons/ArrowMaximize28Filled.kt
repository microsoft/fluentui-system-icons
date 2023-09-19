package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowMaximize28: ImageVector
  get() {
    if (_arrowMaximize28 != null) {
      return _arrowMaximize28!!
    }
    _arrowMaximize28 = fluentIcon(name = "Filled.ArrowMaximize28", 28f) {
      materialPath {
          moveTo(16.5F, 3.0F)
          horizontalLineTo(24.0F)
          curveToRelative(0.513F, 0.0F, 0.936F, 0.386F, 0.993F, 0.883F)
          lineTo(25.0F, 4.0F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          curveToRelative(-0.513F, 0.0F, -0.936F, -0.386F, -0.993F, -0.883F)
          lineTo(23.0F, 11.5F)
          verticalLineTo(6.414F)
          lineTo(6.414F, 23.0F)
          horizontalLineTo(11.5F)
          curveToRelative(0.513F, 0.0F, 0.935F, 0.386F, 0.993F, 0.883F)
          lineTo(12.5F, 24.0F)
          curveToRelative(0.0F, 0.513F, -0.386F, 0.936F, -0.883F, 0.993F)
          lineTo(11.5F, 25.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.513F, 0.0F, -0.936F, -0.386F, -0.993F, -0.883F)
          lineTo(3.0F, 24.0F)
          verticalLineToRelative(-7.5F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          curveToRelative(0.513F, 0.0F, 0.936F, 0.386F, 0.993F, 0.883F)
          lineTo(5.0F, 16.5F)
          verticalLineToRelative(5.085F)
          lineTo(21.585F, 5.0F)
          horizontalLineTo(16.5F)
          curveToRelative(-0.513F, 0.0F, -0.935F, -0.386F, -0.993F, -0.883F)
          lineTo(15.5F, 4.0F)
          curveToRelative(0.0F, -0.513F, 0.386F, -0.936F, 0.883F, -0.993F)
          lineTo(16.5F, 3.0F)
          horizontalLineTo(24.0F)
          horizontalLineToRelative(-7.5F)
          close()        
      }
    }
    return _arrowMaximize28!!
  }

private var _arrowMaximize28: ImageVector? = null
