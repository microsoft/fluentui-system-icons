package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Bookmark28: ImageVector
  get() {
    if (_bookmark28 != null) {
      return _bookmark28!!
    }
    _bookmark28 = fluentIcon(name = "Regular.Bookmark28", 28f) {
      materialPath {
          moveTo(6.0F, 6.75F)
          curveTo(6.0F, 4.955F, 7.455F, 3.5F, 9.25F, 3.5F)
          horizontalLineToRelative(9.5F)
          curveTo(20.545F, 3.5F, 22.0F, 4.955F, 22.0F, 6.75F)
          verticalLineToRelative(18.0F)
          curveToRelative(0.0F, 0.285F, -0.161F, 0.545F, -0.416F, 0.672F)
          curveToRelative(-0.256F, 0.126F, -0.56F, 0.098F, -0.787F, -0.075F)
          lineTo(14.0F, 20.192F)
          lineToRelative(-6.797F, 5.157F)
          curveToRelative(-0.227F, 0.172F, -0.532F, 0.2F, -0.787F, 0.074F)
          curveTo(6.161F, 25.295F, 6.0F, 25.035F, 6.0F, 24.75F)
          verticalLineToRelative(-18.0F)
          close()
          moveTo(9.25F, 5.0F)
          curveTo(8.284F, 5.0F, 7.5F, 5.784F, 7.5F, 6.75F)
          verticalLineToRelative(16.49F)
          lineToRelative(6.047F, -4.587F)
          curveToRelative(0.268F, -0.204F, 0.638F, -0.204F, 0.906F, 0.0F)
          lineTo(20.5F, 23.24F)
          verticalLineTo(6.75F)
          curveTo(20.5F, 5.784F, 19.716F, 5.0F, 18.75F, 5.0F)
          horizontalLineToRelative(-9.5F)
          close()        
      }
    }
    return _bookmark28!!
  }

private var _bookmark28: ImageVector? = null
