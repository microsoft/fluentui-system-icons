package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FastForward24: ImageVector
  get() {
    if (_fastForward24 != null) {
      return _fastForward24!!
    }
    _fastForward24 = fluentIcon(name = "Regular.FastForward24", 24f) {
      materialPath {
          moveTo(11.5F, 5.503F)
          curveToRelative(0.0F, -1.28F, 1.498F, -1.971F, 2.472F, -1.142F)
          lineToRelative(7.41F, 6.306F)
          curveToRelative(0.821F, 0.699F, 0.821F, 1.966F, 0.0F, 2.665F)
          lineToRelative(-7.41F, 6.306F)
          curveToRelative(-0.974F, 0.83F, -2.472F, 0.137F, -2.472F, -1.142F)
          verticalLineToRelative(-3.987F)
          lineToRelative(-6.028F, 5.13F)
          curveTo(4.498F, 20.468F, 3.0F, 19.776F, 3.0F, 18.497F)
          verticalLineTo(5.504F)
          curveToRelative(0.0F, -1.28F, 1.498F, -1.972F, 2.472F, -1.143F)
          lineToRelative(6.028F, 5.13F)
          verticalLineTo(5.504F)
          close()
          moveToRelative(0.0F, 5.958F)
          lineToRelative(-7.0F, -5.957F)
          verticalLineToRelative(12.993F)
          lineToRelative(7.0F, -5.957F)
          verticalLineToRelative(-1.08F)
          close()
          moveToRelative(8.91F, 0.348F)
          lineTo(13.0F, 5.503F)
          verticalLineToRelative(12.993F)
          lineToRelative(7.41F, -6.306F)
          curveToRelative(0.117F, -0.1F, 0.117F, -0.281F, 0.0F, -0.38F)
          close()        
      }
    }
    return _fastForward24!!
  }

private var _fastForward24: ImageVector? = null
