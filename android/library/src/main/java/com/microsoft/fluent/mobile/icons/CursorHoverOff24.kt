package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CursorHoverOff24: ImageVector
  get() {
    if (_cursorHoverOff24 != null) {
      return _cursorHoverOff24!!
    }
    _cursorHoverOff24 = fluentIcon(name = "Filled.CursorHoverOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(1.045F, 1.046F)
          curveTo(2.51F, 4.756F, 2.0F, 5.568F, 2.0F, 6.5F)
          verticalLineToRelative(9.0F)
          curveTo(2.0F, 16.88F, 3.12F, 18.0F, 4.5F, 18.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(-7.25F)
          curveToRelative(0.0F, -0.204F, 0.035F, -0.402F, 0.102F, -0.588F)
          lineTo(10.0F, 11.061F)
          verticalLineTo(21.25F)
          curveToRelative(0.0F, 0.329F, 0.214F, 0.619F, 0.527F, 0.716F)
          curveToRelative(0.314F, 0.098F, 0.655F, -0.02F, 0.841F, -0.291F)
          lineToRelative(2.467F, -3.588F)
          lineToRelative(4.042F, 0.85F)
          lineToRelative(2.842F, 2.843F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveTo(7.182F, 4.0F)
          lineToRelative(13.629F, 13.63F)
          curveTo(21.524F, 17.188F, 22.0F, 16.4F, 22.0F, 15.5F)
          verticalLineToRelative(-9.0F)
          curveTo(22.0F, 5.12F, 20.88F, 4.0F, 19.5F, 4.0F)
          horizontalLineTo(7.182F)
          close()        
      }
    }
    return _cursorHoverOff24!!
  }

private var _cursorHoverOff24: ImageVector? = null
