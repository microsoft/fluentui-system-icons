package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DismissSquareMultiple16: ImageVector
  get() {
    if (_dismissSquareMultiple16 != null) {
      return _dismissSquareMultiple16!!
    }
    _dismissSquareMultiple16 = fluentIcon(name = "Filled.DismissSquareMultiple16", 16f) {
      materialPath {
          moveTo(4.0F, 2.0F)
          curveTo(2.895F, 2.0F, 2.0F, 2.895F, 2.0F, 4.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(0.646F, 2.646F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(7.0F, 6.293F)
          lineToRelative(1.646F, -1.647F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          lineTo(7.708F, 7.0F)
          lineToRelative(1.647F, 1.646F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.708F, 0.0F)
          lineTo(7.0F, 7.708F)
          lineTo(5.354F, 9.354F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(6.293F, 7.0F)
          lineTo(4.646F, 5.354F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          close()
          moveTo(13.0F, 10.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(3.268F)
          curveTo(3.613F, 13.598F, 4.26F, 14.0F, 5.0F, 14.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.74F, -0.402F, -1.387F, -1.0F, -1.732F)
          verticalLineTo(10.5F)
          close()        
      }
    }
    return _dismissSquareMultiple16!!
  }

private var _dismissSquareMultiple16: ImageVector? = null
