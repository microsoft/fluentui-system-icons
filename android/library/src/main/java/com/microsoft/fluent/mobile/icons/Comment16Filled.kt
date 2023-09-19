package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Comment16: ImageVector
  get() {
    if (_comment16 != null) {
      return _comment16!!
    }
    _comment16 = fluentIcon(name = "Filled.Comment16", 16f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(2.12F, 2.0F, 1.0F, 3.12F, 1.0F, 4.5F)
          verticalLineToRelative(5.0F)
          curveTo(1.0F, 10.88F, 2.12F, 12.0F, 3.5F, 12.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.942F)
          curveToRelative(0.0F, 0.842F, 0.992F, 1.292F, 1.625F, 0.738F)
          lineTo(8.688F, 12.0F)
          horizontalLineTo(12.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-5.0F)
          curveTo(15.0F, 3.12F, 13.88F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _comment16!!
  }

private var _comment16: ImageVector? = null
