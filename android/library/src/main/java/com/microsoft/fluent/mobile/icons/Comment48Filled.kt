package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Comment48: ImageVector
  get() {
    if (_comment48 != null) {
      return _comment48!!
    }
    _comment48 = fluentIcon(name = "Filled.Comment48", 48f) {
      materialPath {
          moveTo(4.0F, 13.25F)
          curveTo(4.0F, 9.246F, 7.246F, 6.0F, 11.25F, 6.0F)
          horizontalLineToRelative(25.5F)
          curveTo(40.754F, 6.0F, 44.0F, 9.246F, 44.0F, 13.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 4.004F, -3.246F, 7.25F, -7.25F, 7.25F)
          horizontalLineTo(26.397F)
          lineToRelative(-10.85F, 7.658F)
          curveTo(14.057F, 44.71F, 12.0F, 43.644F, 12.0F, 41.82F)
          verticalLineTo(36.0F)
          horizontalLineToRelative(-0.75F)
          curveTo(7.246F, 36.0F, 4.0F, 32.754F, 4.0F, 28.75F)
          verticalLineToRelative(-15.5F)
          close()        
      }
    }
    return _comment48!!
  }

private var _comment48: ImageVector? = null
