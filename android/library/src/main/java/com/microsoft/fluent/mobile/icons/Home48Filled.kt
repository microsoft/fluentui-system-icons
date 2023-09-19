package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Home48: ImageVector
  get() {
    if (_home48 != null) {
      return _home48!!
    }
    _home48 = fluentIcon(name = "Filled.Home48", 48f) {
      materialPath {
          moveTo(26.394F, 5.855F)
          curveToRelative(-1.399F, -1.14F, -3.39F, -1.14F, -4.788F, 0.0F)
          lineTo(8.431F, 16.597F)
          curveTo(7.527F, 17.334F, 7.0F, 18.449F, 7.0F, 19.628F)
          verticalLineToRelative(19.485F)
          curveTo(7.0F, 41.26F, 8.713F, 43.0F, 10.825F, 43.0F)
          horizontalLineToRelative(4.35F)
          curveTo(17.288F, 43.0F, 19.0F, 41.26F, 19.0F, 39.113F)
          verticalLineTo(30.5F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          verticalLineToRelative(8.613F)
          curveTo(29.0F, 41.26F, 30.712F, 43.0F, 32.825F, 43.0F)
          horizontalLineToRelative(4.35F)
          curveTo(39.288F, 43.0F, 41.0F, 41.26F, 41.0F, 39.113F)
          verticalLineTo(19.628F)
          curveToRelative(0.0F, -1.179F, -0.526F, -2.294F, -1.431F, -3.031F)
          lineTo(26.394F, 5.855F)
          close()        
      }
    }
    return _home48!!
  }

private var _home48: ImageVector? = null
