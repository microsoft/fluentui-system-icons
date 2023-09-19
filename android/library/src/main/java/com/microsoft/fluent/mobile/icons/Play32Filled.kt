package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Play32: ImageVector
  get() {
    if (_play32 != null) {
      return _play32!!
    }
    _play32 = fluentIcon(name = "Filled.Play32", 32f) {
      materialPath {
          moveTo(12.225F, 4.462F)
          curveTo(9.89F, 3.142F, 7.0F, 4.827F, 7.0F, 7.508F)
          verticalLineTo(24.5F)
          curveToRelative(0.0F, 2.682F, 2.892F, 4.367F, 5.226F, 3.045F)
          lineToRelative(14.997F, -8.498F)
          curveToRelative(2.367F, -1.341F, 2.366F, -4.751F, 0.0F, -6.091F)
          lineTo(12.224F, 4.462F)
          close()        
      }
    }
    return _play32!!
  }

private var _play32: ImageVector? = null
