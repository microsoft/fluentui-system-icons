package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSquareDown20: ImageVector
  get() {
    if (_arrowSquareDown20 != null) {
      return _arrowSquareDown20!!
    }
    _arrowSquareDown20 = fluentIcon(name = "Filled.ArrowSquareDown20", 20f) {
      materialPath {
          moveTo(5.0F, 3.0F)
          curveTo(3.895F, 3.0F, 3.0F, 3.895F, 3.0F, 5.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(5.5F, 3.5F)
          verticalLineToRelative(5.793F)
          lineToRelative(2.646F, -2.646F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.196F, 0.511F, -0.196F, 0.707F, 0.0F)
          lineTo(9.5F, 12.293F)
          verticalLineTo(6.5F)
          curveTo(9.5F, 6.224F, 9.724F, 6.0F, 10.0F, 6.0F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          close()        
      }
    }
    return _arrowSquareDown20!!
  }

private var _arrowSquareDown20: ImageVector? = null
