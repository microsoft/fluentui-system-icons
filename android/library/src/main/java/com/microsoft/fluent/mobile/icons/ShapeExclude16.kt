package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShapeExclude16: ImageVector
  get() {
    if (_shapeExclude16 != null) {
      return _shapeExclude16!!
    }
    _shapeExclude16 = fluentIcon(name = "Filled.ShapeExclude16", 16f) {
      materialPath {
          moveTo(3.0F, 2.268F)
          curveTo(2.402F, 2.613F, 2.0F, 3.26F, 2.0F, 4.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          curveTo(3.655F, 2.0F, 3.33F, 2.087F, 3.047F, 2.241F)
          lineTo(3.0F, 2.268F)
          close()
          moveTo(11.0F, 5.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(4.0F)
          close()        
      }
    }
    return _shapeExclude16!!
  }

private var _shapeExclude16: ImageVector? = null
