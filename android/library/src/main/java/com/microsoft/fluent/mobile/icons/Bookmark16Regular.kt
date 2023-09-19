package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Bookmark16: ImageVector
  get() {
    if (_bookmark16 != null) {
      return _bookmark16!!
    }
    _bookmark16 = fluentIcon(name = "Regular.Bookmark16", 16f) {
      materialPath {
          moveTo(3.78F, 13.918F)
          curveToRelative(-0.333F, 0.222F, -0.778F, -0.016F, -0.778F, -0.416F)
          verticalLineTo(4.01F)
          curveToRelative(0.0F, -1.103F, 0.893F, -1.998F, 1.996F, -2.0F)
          lineToRelative(6.0F, -0.011F)
          curveTo(12.103F, 1.998F, 13.0F, 2.892F, 13.002F, 3.996F)
          verticalLineToRelative(9.506F)
          curveToRelative(0.0F, 0.4F, -0.445F, 0.638F, -0.778F, 0.416F)
          lineToRelative(-4.222F, -2.82F)
          lineToRelative(-4.222F, 2.82F)
          close()
          moveTo(12.002F, 4.0F)
          lineToRelative(-0.007F, -0.118F)
          curveTo(11.936F, 3.384F, 11.513F, 2.999F, 11.0F, 3.0F)
          lineTo(5.0F, 3.01F)
          curveToRelative(-0.551F, 0.002F, -0.998F, 0.45F, -0.998F, 1.0F)
          verticalLineToRelative(8.557F)
          lineToRelative(3.722F, -2.486F)
          curveToRelative(0.168F, -0.112F, 0.387F, -0.112F, 0.556F, 0.0F)
          lineToRelative(3.722F, 2.486F)
          verticalLineTo(4.0F)
          close()        
      }
    }
    return _bookmark16!!
  }

private var _bookmark16: ImageVector? = null
