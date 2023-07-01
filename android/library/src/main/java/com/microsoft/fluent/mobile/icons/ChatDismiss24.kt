package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatDismiss24: ImageVector
  get() {
    if (_chatDismiss24 != null) {
      return _chatDismiss24!!
    }
    _chatDismiss24 = fluentIcon(name = "Filled.ChatDismiss24", 24f) {
      materialPath {
          moveTo(22.0F, 12.0F)
          curveToRelative(0.0F, -5.523F, -4.477F, -10.0F, -10.0F, -10.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          curveToRelative(0.0F, 1.62F, 0.386F, 3.186F, 1.115F, 4.592F)
          lineToRelative(-1.068F, 3.823F)
          curveToRelative(-0.062F, 0.22F, -0.062F, 0.453F, 0.0F, 0.673F)
          curveToRelative(0.186F, 0.665F, 0.875F, 1.053F, 1.54F, 0.867F)
          lineToRelative(3.826F, -1.067F)
          curveTo(8.818F, 21.615F, 10.382F, 22.0F, 12.0F, 22.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          close()
          moveTo(9.28F, 8.22F)
          lineTo(12.0F, 10.94F)
          lineToRelative(2.72F, -2.72F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(13.06F, 12.0F)
          lineToRelative(2.72F, 2.72F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(12.0F, 13.06F)
          lineToRelative(-2.72F, 2.72F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(10.94F, 12.0F)
          lineTo(8.22F, 9.28F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _chatDismiss24!!
  }

private var _chatDismiss24: ImageVector? = null
