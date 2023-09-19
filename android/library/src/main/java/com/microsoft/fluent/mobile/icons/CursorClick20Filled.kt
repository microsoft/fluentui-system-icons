package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CursorClick20: ImageVector
  get() {
    if (_cursorClick20 != null) {
      return _cursorClick20!!
    }
    _cursorClick20 = fluentIcon(name = "Filled.CursorClick20", 20f) {
      materialPath {
          moveTo(7.5F, 2.0F)
          curveTo(7.776F, 2.0F, 8.0F, 2.224F, 8.0F, 2.5F)
          verticalLineToRelative(2.0F)
          curveTo(8.0F, 4.776F, 7.776F, 5.0F, 7.5F, 5.0F)
          reflectiveCurveTo(7.0F, 4.776F, 7.0F, 4.5F)
          verticalLineToRelative(-2.0F)
          curveTo(7.0F, 2.224F, 7.224F, 2.0F, 7.5F, 2.0F)
          close()
          moveTo(3.61F, 3.61F)
          curveToRelative(0.196F, -0.194F, 0.513F, -0.194F, 0.708F, 0.0F)
          lineToRelative(1.414F, 1.415F)
          curveToRelative(0.196F, 0.195F, 0.196F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.195F, 0.196F, -0.512F, 0.196F, -0.707F, 0.0F)
          lineTo(3.611F, 4.318F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          close()
          moveToRelative(7.78F, 0.0F)
          curveToRelative(0.194F, 0.196F, 0.194F, 0.513F, 0.0F, 0.708F)
          lineTo(9.974F, 5.732F)
          curveToRelative(-0.195F, 0.196F, -0.512F, 0.196F, -0.707F, 0.0F)
          curveToRelative(-0.196F, -0.195F, -0.196F, -0.512F, 0.0F, -0.707F)
          lineToRelative(1.414F, -1.414F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          close()
          moveTo(2.0F, 7.5F)
          curveTo(2.0F, 7.224F, 2.224F, 7.0F, 2.5F, 7.0F)
          horizontalLineToRelative(2.0F)
          curveTo(4.776F, 7.0F, 5.0F, 7.224F, 5.0F, 7.5F)
          reflectiveCurveTo(4.776F, 8.0F, 4.5F, 8.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(2.224F, 8.0F, 2.0F, 7.776F, 2.0F, 7.5F)
          close()
          moveToRelative(5.5F, 0.532F)
          verticalLineToRelative(9.26F)
          curveToRelative(0.0F, 0.446F, 0.539F, 0.67F, 0.854F, 0.354F)
          lineToRelative(2.56F, -2.56F)
          curveToRelative(0.375F, -0.375F, 0.884F, -0.586F, 1.414F, -0.586F)
          horizontalLineToRelative(3.232F)
          curveToRelative(0.474F, 0.0F, 0.682F, -0.599F, 0.31F, -0.892F)
          lineTo(8.31F, 7.639F)
          curveTo(7.982F, 7.38F, 7.5F, 7.614F, 7.5F, 8.032F)
          close()        
      }
    }
    return _cursorClick20!!
  }

private var _cursorClick20: ImageVector? = null
