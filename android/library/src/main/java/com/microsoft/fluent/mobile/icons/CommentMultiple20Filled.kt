package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CommentMultiple20: ImageVector
  get() {
    if (_commentMultiple20 != null) {
      return _commentMultiple20!!
    }
    _commentMultiple20 = fluentIcon(name = "Filled.CommentMultiple20", 20f) {
      materialPath {
          moveTo(6.5F, 2.0F)
          curveTo(5.28F, 2.0F, 4.264F, 2.874F, 4.044F, 4.03F)
          curveTo(4.194F, 4.01F, 4.346F, 4.0F, 4.5F, 4.0F)
          horizontalLineToRelative(8.0F)
          curveTo(14.433F, 4.0F, 16.0F, 5.567F, 16.0F, 7.5F)
          verticalLineToRelative(5.45F)
          curveToRelative(1.141F, -0.232F, 2.0F, -1.24F, 2.0F, -2.45F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          horizontalLineTo(6.5F)
          close()
          moveToRelative(-2.0F, 3.0F)
          curveTo(4.329F, 5.0F, 4.162F, 5.017F, 4.0F, 5.05F)
          curveTo(2.859F, 5.282F, 2.0F, 6.29F, 2.0F, 7.5F)
          verticalLineToRelative(6.0F)
          curveTo(2.0F, 14.88F, 3.12F, 16.0F, 4.5F, 16.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(1.028F)
          curveToRelative(0.0F, 0.814F, 0.92F, 1.287F, 1.581F, 0.814F)
          lineTo(9.161F, 16.0F)
          horizontalLineTo(12.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-6.0F)
          curveTo(15.0F, 6.12F, 13.88F, 5.0F, 12.5F, 5.0F)
          horizontalLineToRelative(-8.0F)
          close()        
      }
    }
    return _commentMultiple20!!
  }

private var _commentMultiple20: ImageVector? = null
