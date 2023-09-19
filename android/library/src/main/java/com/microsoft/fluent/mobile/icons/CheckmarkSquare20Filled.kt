package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CheckmarkSquare20: ImageVector
  get() {
    if (_checkmarkSquare20 != null) {
      return _checkmarkSquare20!!
    }
    _checkmarkSquare20 = fluentIcon(name = "Filled.CheckmarkSquare20", 20f) {
      materialPath {
          moveTo(6.0F, 3.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(7.354F, 5.354F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.196F, 0.511F, -0.196F, 0.707F, 0.0F)
          lineTo(9.0F, 11.293F)
          lineToRelative(3.646F, -3.646F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          close()        
      }
    }
    return _checkmarkSquare20!!
  }

private var _checkmarkSquare20: ImageVector? = null
