package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Bookmark28: ImageVector
  get() {
    if (_bookmark28 != null) {
      return _bookmark28!!
    }
    _bookmark28 = fluentIcon(name = "Filled.Bookmark28", 28f) {
      materialPath {
          moveTo(9.25F, 3.5F)
          curveTo(7.455F, 3.5F, 6.0F, 4.955F, 6.0F, 6.75F)
          verticalLineToRelative(18.0F)
          curveToRelative(0.0F, 0.285F, 0.161F, 0.545F, 0.416F, 0.672F)
          curveToRelative(0.255F, 0.126F, 0.56F, 0.098F, 0.787F, -0.075F)
          lineTo(14.0F, 20.192F)
          lineToRelative(6.797F, 5.157F)
          curveToRelative(0.227F, 0.172F, 0.531F, 0.2F, 0.787F, 0.074F)
          curveTo(21.839F, 25.295F, 22.0F, 25.035F, 22.0F, 24.75F)
          verticalLineToRelative(-18.0F)
          curveToRelative(0.0F, -1.795F, -1.455F, -3.25F, -3.25F, -3.25F)
          horizontalLineToRelative(-9.5F)
          close()        
      }
    }
    return _bookmark28!!
  }

private var _bookmark28: ImageVector? = null
