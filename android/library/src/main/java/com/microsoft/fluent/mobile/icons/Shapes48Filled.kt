package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Shapes48: ImageVector
  get() {
    if (_shapes48 != null) {
      return _shapes48!!
    }
    _shapes48 = fluentIcon(name = "Filled.Shapes48", 48f) {
      materialPath {
          moveTo(23.25F, 15.5F)
          horizontalLineToRelative(7.603F)
          curveTo(29.887F, 8.993F, 24.276F, 4.0F, 17.5F, 4.0F)
          curveTo(10.044F, 4.0F, 4.0F, 10.044F, 4.0F, 17.5F)
          curveToRelative(0.0F, 6.776F, 4.993F, 12.387F, 11.5F, 13.353F)
          verticalLineTo(23.25F)
          curveToRelative(0.0F, -4.28F, 3.47F, -7.75F, 7.75F, -7.75F)
          close()
          moveToRelative(0.0F, 2.5F)
          curveToRelative(-2.9F, 0.0F, -5.25F, 2.35F, -5.25F, 5.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 2.9F, 2.35F, 5.25F, 5.25F, 5.25F)
          horizontalLineToRelative(15.5F)
          curveToRelative(2.9F, 0.0F, 5.25F, -2.35F, 5.25F, -5.25F)
          verticalLineToRelative(-15.5F)
          curveToRelative(0.0F, -2.9F, -2.35F, -5.25F, -5.25F, -5.25F)
          horizontalLineToRelative(-15.5F)
          close()        
      }
    }
    return _shapes48!!
  }

private var _shapes48: ImageVector? = null
