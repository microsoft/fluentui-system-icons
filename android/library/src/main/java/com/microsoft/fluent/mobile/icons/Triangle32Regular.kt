package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Triangle32: ImageVector
  get() {
    if (_triangle32 != null) {
      return _triangle32!!
    }
    _triangle32 = fluentIcon(name = "Regular.Triangle32", 32f) {
      materialPath {
          moveTo(13.154F, 4.683F)
          curveToRelative(1.236F, -2.242F, 4.458F, -2.241F, 5.693F, 0.0F)
          lineToRelative(10.742F, 19.5F)
          curveTo(30.783F, 26.347F, 29.216F, 29.0F, 26.743F, 29.0F)
          horizontalLineTo(5.25F)
          curveToRelative(-2.474F, 0.0F, -4.04F, -2.653F, -2.846F, -4.819F)
          lineToRelative(10.75F, -19.498F)
          close()
          moveToRelative(3.941F, 0.966F)
          curveToRelative(-0.475F, -0.862F, -1.714F, -0.863F, -2.19F, 0.0F)
          lineTo(4.157F, 25.147F)
          curveTo(3.696F, 25.98F, 4.3F, 27.0F, 5.251F, 27.0F)
          horizontalLineToRelative(21.492F)
          curveToRelative(0.95F, 0.0F, 1.553F, -1.02F, 1.095F, -1.853F)
          lineTo(17.094F, 5.65F)
          close()        
      }
    }
    return _triangle32!!
  }

private var _triangle32: ImageVector? = null
