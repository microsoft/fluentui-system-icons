package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Premium32: ImageVector
  get() {
    if (_premium32 != null) {
      return _premium32!!
    }
    _premium32 = fluentIcon(name = "Regular.Premium32", 32f) {
      materialPath {
          moveTo(7.0F, 4.0F)
          curveTo(6.621F, 4.0F, 6.275F, 4.214F, 6.106F, 4.553F)
          lineToRelative(-4.0F, 8.0F)
          curveToRelative(-0.176F, 0.351F, -0.13F, 0.773F, 0.118F, 1.078F)
          lineToRelative(13.0F, 16.0F)
          curveTo(15.414F, 29.864F, 15.699F, 30.0F, 16.0F, 30.0F)
          curveToRelative(0.301F, 0.0F, 0.586F, -0.136F, 0.776F, -0.37F)
          lineToRelative(13.0F, -16.0F)
          curveToRelative(0.248F, -0.304F, 0.294F, -0.726F, 0.118F, -1.077F)
          lineToRelative(-4.0F, -8.0F)
          curveTo(25.725F, 4.214F, 25.38F, 4.0F, 25.0F, 4.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(-2.382F, 8.0F)
          lineToRelative(3.0F, -6.0F)
          horizontalLineToRelative(4.101F)
          lineToRelative(-1.5F, 6.0F)
          horizontalLineTo(4.618F)
          close()
          moveToRelative(0.483F, 2.0F)
          horizontalLineToRelative(5.164F)
          lineToRelative(3.227F, 10.328F)
          lineTo(5.101F, 14.0F)
          close()
          moveToRelative(7.26F, 0.0F)
          horizontalLineToRelative(7.279F)
          lineTo(16.0F, 25.647F)
          lineTo(12.36F, 14.0F)
          close()
          moveToRelative(9.374F, 0.0F)
          horizontalLineTo(26.9F)
          lineToRelative(-8.391F, 10.328F)
          lineTo(21.735F, 14.0F)
          close()
          moveToRelative(5.647F, -2.0F)
          horizontalLineToRelative(-5.601F)
          lineToRelative(-1.5F, -6.0F)
          horizontalLineToRelative(4.101F)
          lineToRelative(3.0F, 6.0F)
          close()
          moveToRelative(-7.663F, 0.0F)
          horizontalLineToRelative(-7.438F)
          lineToRelative(1.5F, -6.0F)
          horizontalLineToRelative(4.438F)
          lineToRelative(1.5F, 6.0F)
          close()        
      }
    }
    return _premium32!!
  }

private var _premium32: ImageVector? = null
