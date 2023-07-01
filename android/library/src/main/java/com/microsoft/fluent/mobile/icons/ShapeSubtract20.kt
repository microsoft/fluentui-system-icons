package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShapeSubtract20: ImageVector
  get() {
    if (_shapeSubtract20 != null) {
      return _shapeSubtract20!!
    }
    _shapeSubtract20 = fluentIcon(name = "Filled.ShapeSubtract20", 20f) {
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
          moveTo(8.0F, 9.5F)
          curveTo(8.0F, 8.672F, 8.672F, 8.0F, 9.5F, 8.0F)
          horizontalLineToRelative(6.0F)
          curveTo(16.328F, 8.0F, 17.0F, 8.672F, 17.0F, 9.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-6.0F)
          curveTo(8.672F, 17.0F, 8.0F, 16.328F, 8.0F, 15.5F)
          verticalLineToRelative(-6.0F)
          close()        
      }
    }
    return _shapeSubtract20!!
  }

private var _shapeSubtract20: ImageVector? = null
