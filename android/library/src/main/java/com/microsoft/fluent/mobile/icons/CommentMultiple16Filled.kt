package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CommentMultiple16: ImageVector
  get() {
    if (_commentMultiple16 != null) {
      return _commentMultiple16!!
    }
    _commentMultiple16 = fluentIcon(name = "Filled.CommentMultiple16", 16f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveToRelative(0.456F, -0.607F, 1.182F, -1.0F, 2.0F, -1.0F)
          horizontalLineTo(12.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.818F, -0.393F, 1.544F, -1.0F, 2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(3.5F)
          close()
          moveTo(13.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(3.0F)
          curveTo(1.895F, 3.0F, 1.0F, 3.895F, 1.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          verticalLineToRelative(1.028F)
          curveToRelative(0.0F, 0.814F, 0.92F, 1.287F, 1.581F, 0.814F)
          lineTo(7.161F, 13.0F)
          horizontalLineTo(11.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          close()        
      }
    }
    return _commentMultiple16!!
  }

private var _commentMultiple16: ImageVector? = null
