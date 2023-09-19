package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Video32: ImageVector
  get() {
    if (_video32 != null) {
      return _video32!!
    }
    _video32 = fluentIcon(name = "Regular.Video32", 32f) {
      materialPath {
          moveTo(6.5F, 5.5F)
          curveTo(4.015F, 5.5F, 2.0F, 7.515F, 2.0F, 10.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 2.485F, 2.015F, 4.5F, 4.5F, 4.5F)
          horizontalLineToRelative(12.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-1.5F)
          lineToRelative(4.2F, 3.15F)
          curveToRelative(1.153F, 0.865F, 2.8F, 0.042F, 2.8F, -1.4F)
          verticalLineTo(9.75F)
          curveToRelative(0.0F, -1.442F, -1.647F, -2.265F, -2.8F, -1.4F)
          lineTo(23.0F, 11.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -2.485F, -2.015F, -4.5F, -4.5F, -4.5F)
          horizontalLineToRelative(-12.0F)
          close()
          moveTo(23.0F, 14.0F)
          lineToRelative(5.0F, -3.75F)
          verticalLineToRelative(11.5F)
          lineTo(23.0F, 18.0F)
          verticalLineToRelative(-4.0F)
          close()
          moveToRelative(-2.0F, -4.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-12.0F)
          curveTo(5.12F, 24.5F, 4.0F, 23.38F, 4.0F, 22.0F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          close()        
      }
    }
    return _video32!!
  }

private var _video32: ImageVector? = null
