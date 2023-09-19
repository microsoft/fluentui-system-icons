package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Steps16: ImageVector
  get() {
    if (_steps16 != null) {
      return _steps16!!
    }
    _steps16 = fluentIcon(name = "Filled.Steps16", 16f) {
      materialPath {
          moveTo(5.0F, 13.0F)
          horizontalLineTo(2.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.449F, -1.0F, -1.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -0.551F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.551F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(2.0F)
          curveToRelative(0.0F, -0.551F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.449F, 1.0F, 1.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineTo(2.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.551F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.551F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(1.0F)
          close()
          moveToRelative(10.0F, -0.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -0.551F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.449F, -1.0F, 1.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.449F, -1.0F, 1.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.551F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(1.379F, 0.0F, 2.5F, -1.122F, 2.5F, -2.5F)
          close()        
      }
    }
    return _steps16!!
  }

private var _steps16: ImageVector? = null
