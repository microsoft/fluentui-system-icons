package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RectangleLandscape48: ImageVector
  get() {
    if (_rectangleLandscape48 != null) {
      return _rectangleLandscape48!!
    }
    _rectangleLandscape48 = fluentIcon(name = "Regular.RectangleLandscape48", 48f) {
      materialPath {
          moveTo(4.0F, 14.25F)
          curveTo(4.0F, 10.798F, 6.798F, 8.0F, 10.25F, 8.0F)
          horizontalLineToRelative(27.5F)
          curveTo(41.202F, 8.0F, 44.0F, 10.798F, 44.0F, 14.25F)
          verticalLineToRelative(19.5F)
          curveToRelative(0.0F, 3.452F, -2.798F, 6.25F, -6.25F, 6.25F)
          horizontalLineToRelative(-27.5F)
          curveTo(6.798F, 40.0F, 4.0F, 37.202F, 4.0F, 33.75F)
          verticalLineToRelative(-19.5F)
          close()
          moveToRelative(6.25F, -3.75F)
          curveToRelative(-2.071F, 0.0F, -3.75F, 1.679F, -3.75F, 3.75F)
          verticalLineToRelative(19.5F)
          curveToRelative(0.0F, 2.071F, 1.679F, 3.75F, 3.75F, 3.75F)
          horizontalLineToRelative(27.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineToRelative(-19.5F)
          curveToRelative(0.0F, -2.071F, -1.679F, -3.75F, -3.75F, -3.75F)
          horizontalLineToRelative(-27.5F)
          close()        
      }
    }
    return _rectangleLandscape48!!
  }

private var _rectangleLandscape48: ImageVector? = null
