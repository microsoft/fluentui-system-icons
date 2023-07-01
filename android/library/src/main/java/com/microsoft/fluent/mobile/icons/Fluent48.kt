package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Fluent48: ImageVector
  get() {
    if (_fluent48 != null) {
      return _fluent48!!
    }
    _fluent48 = fluentIcon(name = "Filled.Fluent48", 48f) {
      materialPath {
          moveTo(25.17F, 4.163F)
          curveToRelative(-0.422F, -0.21F, -0.919F, -0.21F, -1.34F, 0.0F)
          lineToRelative(-12.0F, 6.0F)
          curveTo(11.32F, 10.418F, 11.0F, 10.937F, 11.0F, 11.505F)
          verticalLineToRelative(23.456F)
          curveToRelative(0.0F, 0.516F, 0.265F, 0.996F, 0.702F, 1.27F)
          lineToRelative(12.0F, 7.54F)
          curveToRelative(0.462F, 0.29F, 1.046F, 0.306F, 1.524F, 0.042F)
          curveTo(25.703F, 43.549F, 26.0F, 43.046F, 26.0F, 42.5F)
          verticalLineTo(30.432F)
          lineToRelative(11.17F, -5.585F)
          curveToRelative(0.51F, -0.254F, 0.83F, -0.774F, 0.83F, -1.342F)
          curveToRelative(0.0F, -0.568F, -0.321F, -1.087F, -0.83F, -1.342F)
          lineToRelative(-9.316F, -4.658F)
          lineToRelative(9.317F, -4.658F)
          curveTo(37.679F, 12.593F, 38.0F, 12.073F, 38.0F, 11.505F)
          curveToRelative(0.0F, -0.568F, -0.321F, -1.088F, -0.83F, -1.342F)
          lineToRelative(-12.0F, -6.0F)
          close()        
      }
    }
    return _fluent48!!
  }

private var _fluent48: ImageVector? = null
