package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CommentOff24: ImageVector
  get() {
    if (_commentOff24 != null) {
      return _commentOff24!!
    }
    _commentOff24 = fluentIcon(name = "Filled.CommentOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(0.702F, 0.702F)
          curveTo(2.352F, 4.568F, 2.0F, 5.368F, 2.0F, 6.25F)
          verticalLineToRelative(8.5F)
          curveTo(2.0F, 16.545F, 3.455F, 18.0F, 5.25F, 18.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(2.75F)
          curveToRelative(0.0F, 1.03F, 1.176F, 1.618F, 2.0F, 1.0F)
          lineTo(13.0F, 18.0F)
          horizontalLineToRelative(3.939F)
          lineToRelative(3.78F, 3.78F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveTo(22.0F, 14.75F)
          curveToRelative(0.0F, 1.107F, -0.553F, 2.084F, -1.398F, 2.67F)
          lineTo(6.182F, 3.0F)
          horizontalLineTo(18.75F)
          curveTo(20.545F, 3.0F, 22.0F, 4.455F, 22.0F, 6.25F)
          verticalLineToRelative(8.5F)
          close()        
      }
    }
    return _commentOff24!!
  }

private var _commentOff24: ImageVector? = null
