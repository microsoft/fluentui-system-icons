package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CommentOff28: ImageVector
  get() {
    if (_commentOff28 != null) {
      return _commentOff28!!
    }
    _commentOff28 = fluentIcon(name = "Filled.CommentOff28", 28f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(0.848F, 0.85F)
          curveTo(2.408F, 4.805F, 2.0F, 5.729F, 2.0F, 6.75F)
          verticalLineToRelative(10.5F)
          curveTo(2.0F, 19.321F, 3.679F, 21.0F, 5.75F, 21.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(3.296F)
          curveToRelative(0.0F, 1.427F, 1.617F, 2.254F, 2.774F, 1.419F)
          lineTo(16.309F, 21.0F)
          horizontalLineToRelative(3.63F)
          lineToRelative(4.78F, 4.78F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveTo(6.182F, 3.0F)
          lineToRelative(17.65F, 17.65F)
          curveToRelative(1.28F, -0.596F, 2.168F, -1.894F, 2.168F, -3.4F)
          verticalLineTo(6.75F)
          curveTo(26.0F, 4.679F, 24.321F, 3.0F, 22.25F, 3.0F)
          horizontalLineTo(6.182F)
          close()        
      }
    }
    return _commentOff28!!
  }

private var _commentOff28: ImageVector? = null
