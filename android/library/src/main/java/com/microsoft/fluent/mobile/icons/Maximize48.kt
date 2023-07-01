package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Maximize48: ImageVector
  get() {
    if (_maximize48 != null) {
      return _maximize48!!
    }
    _maximize48 = fluentIcon(name = "Regular.Maximize48", 48f) {
      materialPath {
          moveTo(6.0F, 11.25F)
          curveTo(6.0F, 8.35F, 8.35F, 6.0F, 11.25F, 6.0F)
          horizontalLineToRelative(25.5F)
          curveTo(39.65F, 6.0F, 42.0F, 8.35F, 42.0F, 11.25F)
          verticalLineToRelative(25.5F)
          curveToRelative(0.0F, 2.9F, -2.35F, 5.25F, -5.25F, 5.25F)
          horizontalLineToRelative(-25.5F)
          curveTo(8.35F, 42.0F, 6.0F, 39.65F, 6.0F, 36.75F)
          verticalLineToRelative(-25.5F)
          close()
          moveToRelative(5.25F, -2.75F)
          curveToRelative(-1.519F, 0.0F, -2.75F, 1.231F, -2.75F, 2.75F)
          verticalLineToRelative(25.5F)
          curveToRelative(0.0F, 1.519F, 1.231F, 2.75F, 2.75F, 2.75F)
          horizontalLineToRelative(25.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineToRelative(-25.5F)
          curveToRelative(0.0F, -1.519F, -1.231F, -2.75F, -2.75F, -2.75F)
          horizontalLineToRelative(-25.5F)
          close()        
      }
    }
    return _maximize48!!
  }

private var _maximize48: ImageVector? = null
