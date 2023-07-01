package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CursorHoverOff28: ImageVector
  get() {
    if (_cursorHoverOff28 != null) {
      return _cursorHoverOff28!!
    }
    _cursorHoverOff28 = fluentIcon(name = "Filled.CursorHoverOff28", 28f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(1.814F, 1.814F)
          curveTo(2.862F, 5.41F, 2.0F, 6.48F, 2.0F, 7.75F)
          verticalLineToRelative(11.5F)
          curveTo(2.0F, 20.769F, 3.231F, 22.0F, 4.75F, 22.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -0.204F, 0.035F, -0.402F, 0.102F, -0.588F)
          lineToRelative(0.898F, 0.899F)
          verticalLineTo(25.25F)
          curveToRelative(0.0F, 0.316F, 0.198F, 0.598F, 0.495F, 0.705F)
          curveToRelative(0.297F, 0.108F, 0.629F, 0.018F, 0.831F, -0.225F)
          lineToRelative(3.393F, -4.071F)
          curveToRelative(0.055F, -0.067F, 0.141F, -0.1F, 0.227F, -0.088F)
          lineToRelative(4.45F, 0.636F)
          lineToRelative(3.573F, 3.573F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-3.737F, -3.738F)
          lineToRelative(-0.013F, -0.012F)
          lineToRelative(-9.0F, -9.0F)
          lineToRelative(-0.008F, -0.009F)
          lineTo(3.28F, 2.22F)
          close()
          moveTo(8.182F, 5.0F)
          lineToRelative(16.56F, 16.56F)
          curveTo(25.499F, 21.07F, 26.0F, 20.22F, 26.0F, 19.25F)
          verticalLineTo(7.75F)
          curveTo(26.0F, 6.231F, 24.769F, 5.0F, 23.25F, 5.0F)
          horizontalLineTo(8.182F)
          close()        
      }
    }
    return _cursorHoverOff28!!
  }

private var _cursorHoverOff28: ImageVector? = null
