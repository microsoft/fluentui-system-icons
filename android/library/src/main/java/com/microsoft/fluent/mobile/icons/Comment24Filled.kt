package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Comment24: ImageVector
  get() {
    if (_comment24 != null) {
      return _comment24!!
    }
    _comment24 = fluentIcon(name = "Filled.Comment24", 24f) {
      materialPath {
          moveTo(5.25F, 3.0F)
          curveTo(3.455F, 3.0F, 2.0F, 4.455F, 2.0F, 6.25F)
          verticalLineToRelative(8.5F)
          curveTo(2.0F, 16.545F, 3.455F, 18.0F, 5.25F, 18.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(2.75F)
          curveToRelative(0.0F, 1.03F, 1.176F, 1.618F, 2.0F, 1.0F)
          lineTo(13.0F, 18.0F)
          horizontalLineToRelative(5.75F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-8.5F)
          curveTo(22.0F, 4.455F, 20.545F, 3.0F, 18.75F, 3.0F)
          horizontalLineTo(5.25F)
          close()        
      }
    }
    return _comment24!!
  }

private var _comment24: ImageVector? = null
