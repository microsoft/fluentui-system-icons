package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ReOrder16: ImageVector
  get() {
    if (_reOrder16 != null) {
      return _reOrder16!!
    }
    _reOrder16 = fluentIcon(name = "Regular.ReOrder16", 16f) {
      materialPath {
          moveTo(2.5F, 9.0F)
          horizontalLineToRelative(11.0F)
          curveTo(13.776F, 9.0F, 14.0F, 9.224F, 14.0F, 9.5F)
          curveToRelative(0.0F, 0.245F, -0.177F, 0.45F, -0.41F, 0.492F)
          lineTo(13.5F, 10.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(2.224F, 10.0F, 2.0F, 9.776F, 2.0F, 9.5F)
          curveToRelative(0.0F, -0.245F, 0.177F, -0.45F, 0.41F, -0.492F)
          lineTo(2.5F, 9.0F)
          horizontalLineToRelative(11.0F)
          close()
          moveToRelative(0.0F, -3.0F)
          horizontalLineToRelative(11.0F)
          curveTo(13.776F, 6.0F, 14.0F, 6.224F, 14.0F, 6.5F)
          curveToRelative(0.0F, 0.245F, -0.177F, 0.45F, -0.41F, 0.492F)
          lineTo(13.5F, 7.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(2.224F, 7.0F, 2.0F, 6.776F, 2.0F, 6.5F)
          curveToRelative(0.0F, -0.245F, 0.177F, -0.45F, 0.41F, -0.492F)
          lineTo(2.5F, 6.0F)
          horizontalLineToRelative(11.0F)
          close()        
      }
    }
    return _reOrder16!!
  }

private var _reOrder16: ImageVector? = null
