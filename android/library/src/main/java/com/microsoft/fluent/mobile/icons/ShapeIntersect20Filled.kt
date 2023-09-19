package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShapeIntersect20: ImageVector
  get() {
    if (_shapeIntersect20 != null) {
      return _shapeIntersect20!!
    }
    _shapeIntersect20 = fluentIcon(name = "Filled.ShapeIntersect20", 20f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveTo(11.88F, 2.0F, 13.0F, 3.12F, 13.0F, 4.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(2.5F)
          curveTo(16.88F, 7.0F, 18.0F, 8.12F, 18.0F, 9.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-6.0F)
          curveTo(8.12F, 18.0F, 7.0F, 16.88F, 7.0F, 15.5F)
          verticalLineTo(13.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 13.0F, 2.0F, 11.88F, 2.0F, 10.5F)
          verticalLineToRelative(-6.0F)
          close()
          moveTo(7.0F, 12.0F)
          verticalLineTo(9.5F)
          curveTo(7.0F, 8.12F, 8.12F, 7.0F, 9.5F, 7.0F)
          horizontalLineTo(12.0F)
          verticalLineTo(4.5F)
          curveTo(12.0F, 3.672F, 11.328F, 3.0F, 10.5F, 3.0F)
          horizontalLineToRelative(-6.0F)
          curveTo(3.672F, 3.0F, 3.0F, 3.672F, 3.0F, 4.5F)
          verticalLineToRelative(6.0F)
          curveTo(3.0F, 11.328F, 3.672F, 12.0F, 4.5F, 12.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(1.0F, 1.0F)
          verticalLineToRelative(2.5F)
          curveTo(8.0F, 16.328F, 8.672F, 17.0F, 9.5F, 17.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-6.0F)
          curveTo(17.0F, 8.672F, 16.328F, 8.0F, 15.5F, 8.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(8.0F)
          close()        
      }
    }
    return _shapeIntersect20!!
  }

private var _shapeIntersect20: ImageVector? = null
