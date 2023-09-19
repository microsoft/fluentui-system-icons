package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Rewind28: ImageVector
  get() {
    if (_rewind28 != null) {
      return _rewind28!!
    }
    _rewind28 = fluentIcon(name = "Filled.Rewind28", 28f) {
      materialPath {
          moveTo(12.364F, 4.858F)
          curveTo(13.43F, 4.013F, 15.0F, 4.772F, 15.0F, 6.13F)
          verticalLineToRelative(4.57F)
          lineToRelative(7.365F, -5.841F)
          curveTo(23.43F, 4.015F, 25.0F, 4.774F, 25.0F, 6.133F)
          verticalLineToRelative(15.739F)
          curveToRelative(0.0F, 1.359F, -1.57F, 2.117F, -2.634F, 1.273F)
          lineTo(15.0F, 17.305F)
          verticalLineToRelative(4.565F)
          curveToRelative(0.0F, 1.359F, -1.57F, 2.118F, -2.634F, 1.273F)
          lineToRelative(-9.637F, -7.64F)
          curveToRelative(-0.968F, -0.767F, -0.968F, -2.236F, 0.0F, -3.004F)
          lineToRelative(9.636F, -7.641F)
          close()        
      }
    }
    return _rewind28!!
  }

private var _rewind28: ImageVector? = null
