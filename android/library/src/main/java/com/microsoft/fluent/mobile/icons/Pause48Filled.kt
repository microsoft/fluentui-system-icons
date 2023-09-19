package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pause48: ImageVector
  get() {
    if (_pause48 != null) {
      return _pause48!!
    }
    _pause48 = fluentIcon(name = "Filled.Pause48", 48f) {
      materialPath {
          moveTo(11.75F, 6.0F)
          curveTo(9.679F, 6.0F, 8.0F, 7.679F, 8.0F, 9.75F)
          verticalLineToRelative(28.5F)
          curveTo(8.0F, 40.321F, 9.679F, 42.0F, 11.75F, 42.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(9.75F)
          curveTo(22.0F, 7.679F, 20.321F, 6.0F, 18.25F, 6.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveToRelative(18.0F, 0.0F)
          curveTo(27.679F, 6.0F, 26.0F, 7.679F, 26.0F, 9.75F)
          verticalLineToRelative(28.5F)
          curveToRelative(0.0F, 2.071F, 1.679F, 3.75F, 3.75F, 3.75F)
          horizontalLineToRelative(6.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(9.75F)
          curveTo(40.0F, 7.679F, 38.321F, 6.0F, 36.25F, 6.0F)
          horizontalLineToRelative(-6.5F)
          close()        
      }
    }
    return _pause48!!
  }

private var _pause48: ImageVector? = null
