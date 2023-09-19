package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RectangleLandscape28: ImageVector
  get() {
    if (_rectangleLandscape28 != null) {
      return _rectangleLandscape28!!
    }
    _rectangleLandscape28 = fluentIcon(name = "Regular.RectangleLandscape28", 28f) {
      materialPath {
          moveTo(2.004F, 7.75F)
          curveToRelative(0.0F, -2.071F, 1.68F, -3.75F, 3.75F, -3.75F)
          horizontalLineToRelative(16.497F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(5.754F)
          curveToRelative(-2.07F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          verticalLineTo(7.75F)
          close()
          moveToRelative(3.75F, -2.25F)
          curveToRelative(-1.242F, 0.0F, -2.25F, 1.007F, -2.25F, 2.25F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 1.243F, 1.008F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(16.497F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(7.75F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineTo(5.754F)
          close()        
      }
    }
    return _rectangleLandscape28!!
  }

private var _rectangleLandscape28: ImageVector? = null
