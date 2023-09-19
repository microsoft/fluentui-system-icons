package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pause32: ImageVector
  get() {
    if (_pause32 != null) {
      return _pause32!!
    }
    _pause32 = fluentIcon(name = "Filled.Pause32", 32f) {
      materialPath {
          moveTo(7.25F, 3.0F)
          curveTo(5.455F, 3.0F, 4.0F, 4.455F, 4.0F, 6.25F)
          verticalLineToRelative(18.5F)
          curveTo(4.0F, 26.545F, 5.455F, 28.0F, 7.25F, 28.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(6.25F)
          curveTo(14.0F, 4.455F, 12.545F, 3.0F, 10.75F, 3.0F)
          horizontalLineToRelative(-3.5F)
          close()
          moveToRelative(14.0F, 0.0F)
          curveTo(19.455F, 3.0F, 18.0F, 4.455F, 18.0F, 6.25F)
          verticalLineToRelative(18.5F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(3.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(6.25F)
          curveTo(28.0F, 4.455F, 26.545F, 3.0F, 24.75F, 3.0F)
          horizontalLineToRelative(-3.5F)
          close()        
      }
    }
    return _pause32!!
  }

private var _pause32: ImageVector? = null
