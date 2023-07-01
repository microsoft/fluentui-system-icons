package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Rewind20: ImageVector
  get() {
    if (_rewind20 != null) {
      return _rewind20!!
    }
    _rewind20 = fluentIcon(name = "Filled.Rewind20", 20f) {
      materialPath {
          moveTo(10.0F, 5.487F)
          curveToRelative(0.0F, -0.819F, -0.93F, -1.29F, -1.591F, -0.806F)
          lineToRelative(-5.88F, 4.311F)
          curveToRelative(-0.68F, 0.5F, -0.68F, 1.517F, 0.0F, 2.016F)
          lineToRelative(5.88F, 4.312F)
          curveTo(9.069F, 15.805F, 10.0F, 15.333F, 10.0F, 14.514F)
          verticalLineToRelative(-3.16F)
          lineToRelative(5.409F, 3.966F)
          curveTo(16.069F, 15.805F, 17.0F, 15.333F, 17.0F, 14.514F)
          verticalLineTo(5.487F)
          curveToRelative(0.0F, -0.819F, -0.93F, -1.29F, -1.591F, -0.806F)
          lineTo(10.0F, 8.647F)
          verticalLineToRelative(-3.16F)
          close()
          moveTo(8.41F, 4.681F)
          lineTo(8.702F, 5.08F)
          close()        
      }
    }
    return _rewind20!!
  }

private var _rewind20: ImageVector? = null
