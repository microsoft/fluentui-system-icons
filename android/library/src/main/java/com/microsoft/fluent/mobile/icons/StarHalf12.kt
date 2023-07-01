package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarHalf12: ImageVector
  get() {
    if (_starHalf12 != null) {
      return _starHalf12!!
    }
    _starHalf12 = fluentIcon(name = "Filled.StarHalf12", 12f) {
      materialPath {
          moveTo(6.0F, 1.1F)
          curveToRelative(-0.285F, 0.0F, -0.57F, 0.149F, -0.716F, 0.446F)
          lineTo(4.171F, 3.798F)
          lineTo(1.686F, 4.16F)
          curveTo(1.03F, 4.255F, 0.768F, 5.061F, 1.242F, 5.524F)
          lineToRelative(1.8F, 1.753F)
          lineToRelative(-0.425F, 2.476F)
          curveToRelative(-0.112F, 0.654F, 0.574F, 1.152F, 1.16F, 0.844F)
          lineTo(6.0F, 9.428F)
          verticalLineTo(1.1F)
          close()        
      }
    }
    return _starHalf12!!
  }

private var _starHalf12: ImageVector? = null
