package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TabDesktopBottom24: ImageVector
  get() {
    if (_tabDesktopBottom24 != null) {
      return _tabDesktopBottom24!!
    }
    _tabDesktopBottom24 = fluentIcon(name = "Filled.TabDesktopBottom24", 24f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(14.5F)
          verticalLineToRelative(-3.25F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.25F)
          close()
          moveTo(3.0F, 17.0F)
          verticalLineToRelative(0.75F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(-3.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(3.0F)
          close()        
      }
    }
    return _tabDesktopBottom24!!
  }

private var _tabDesktopBottom24: ImageVector? = null
