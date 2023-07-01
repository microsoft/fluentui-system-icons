package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Rewind16: ImageVector
  get() {
    if (_rewind16 != null) {
      return _rewind16!!
    }
    _rewind16 = fluentIcon(name = "Regular.Rewind16", 16f) {
      materialPath {
          moveTo(8.0F, 4.465F)
          curveTo(8.0F, 3.654F, 7.086F, 3.18F, 6.424F, 3.648F)
          lineTo(1.412F, 7.183F)
          curveToRelative(-0.565F, 0.398F, -0.565F, 1.236F, 0.0F, 1.634F)
          lineToRelative(5.012F, 3.536F)
          curveTo(7.086F, 12.82F, 8.0F, 12.346F, 8.0F, 11.536F)
          verticalLineTo(9.232F)
          lineToRelative(4.424F, 3.12F)
          curveTo(13.086F, 12.82F, 14.0F, 12.347F, 14.0F, 11.537F)
          verticalLineTo(4.465F)
          curveToRelative(0.0F, -0.811F, -0.914F, -1.285F, -1.576F, -0.817F)
          lineTo(8.0F, 6.768F)
          verticalLineTo(4.465F)
          close()
          moveToRelative(0.0F, 3.543F)
          verticalLineTo(7.992F)
          lineToRelative(5.0F, -3.527F)
          verticalLineToRelative(7.07F)
          lineTo(8.0F, 8.009F)
          close()
          moveToRelative(-1.0F, 3.528F)
          lineTo(1.988F, 8.0F)
          lineTo(7.0F, 4.465F)
          verticalLineToRelative(7.07F)
          close()        
      }
    }
    return _rewind16!!
  }

private var _rewind16: ImageVector? = null
