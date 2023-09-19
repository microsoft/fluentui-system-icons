package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CommentMultiple32: ImageVector
  get() {
    if (_commentMultiple32 != null) {
      return _commentMultiple32!!
    }
    _commentMultiple32 = fluentIcon(name = "Filled.CommentMultiple32", 32f) {
      materialPath {
          moveTo(10.5F, 3.0F)
          curveTo(8.805F, 3.0F, 7.356F, 4.055F, 6.773F, 5.544F)
          curveTo(7.012F, 5.514F, 7.254F, 5.5F, 7.5F, 5.5F)
          horizontalLineToRelative(13.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          verticalLineToRelative(9.21F)
          curveTo(27.966F, 20.115F, 29.0F, 18.678F, 29.0F, 17.0F)
          verticalLineTo(9.5F)
          curveTo(29.0F, 5.91F, 26.09F, 3.0F, 22.5F, 3.0F)
          horizontalLineToRelative(-12.0F)
          close()
          moveTo(3.0F, 11.5F)
          curveTo(3.0F, 9.015F, 5.015F, 7.0F, 7.5F, 7.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, 2.015F, 4.5F, 4.5F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-5.64F)
          lineToRelative(-4.403F, 3.65F)
          curveTo(9.48F, 30.462F, 8.0F, 29.767F, 8.0F, 28.497F)
          verticalLineTo(26.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          verticalLineTo(11.5F)
          close()        
      }
    }
    return _commentMultiple32!!
  }

private var _commentMultiple32: ImageVector? = null
