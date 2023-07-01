package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RectangleLandscape48: ImageVector
  get() {
    if (_rectangleLandscape48 != null) {
      return _rectangleLandscape48!!
    }
    _rectangleLandscape48 = fluentIcon(name = "Filled.RectangleLandscape48", 48f) {
      materialPath {
          moveTo(4.0F, 13.25F)
          curveTo(4.0F, 10.35F, 6.35F, 8.0F, 9.25F, 8.0F)
          horizontalLineToRelative(29.5F)
          curveToRelative(2.9F, 0.0F, 5.25F, 2.35F, 5.25F, 5.25F)
          verticalLineToRelative(21.5F)
          curveToRelative(0.0F, 2.9F, -2.35F, 5.25F, -5.25F, 5.25F)
          horizontalLineTo(9.25F)
          curveTo(6.35F, 40.0F, 4.0F, 37.65F, 4.0F, 34.75F)
          verticalLineToRelative(-21.5F)
          close()        
      }
    }
    return _rectangleLandscape48!!
  }

private var _rectangleLandscape48: ImageVector? = null
