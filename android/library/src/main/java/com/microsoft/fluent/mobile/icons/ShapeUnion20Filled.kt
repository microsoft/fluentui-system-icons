package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShapeUnion20: ImageVector
  get() {
    if (_shapeUnion20 != null) {
      return _shapeUnion20!!
    }
    _shapeUnion20 = fluentIcon(name = "Filled.ShapeUnion20", 20f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(6.0F)
          curveTo(2.0F, 11.88F, 3.12F, 13.0F, 4.5F, 13.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(2.5F)
          curveTo(7.0F, 16.88F, 8.12F, 18.0F, 9.5F, 18.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-6.0F)
          curveTo(18.0F, 8.12F, 16.88F, 7.0F, 15.5F, 7.0F)
          horizontalLineTo(13.0F)
          verticalLineTo(4.5F)
          curveTo(13.0F, 3.12F, 11.88F, 2.0F, 10.5F, 2.0F)
          horizontalLineToRelative(-6.0F)
          close()        
      }
    }
    return _shapeUnion20!!
  }

private var _shapeUnion20: ImageVector? = null
