package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Rewind24: ImageVector
  get() {
    if (_rewind24 != null) {
      return _rewind24!!
    }
    _rewind24 = fluentIcon(name = "Regular.Rewind24", 24f) {
      materialPath {
          moveTo(12.5F, 5.503F)
          curveToRelative(0.0F, -1.28F, -1.497F, -1.971F, -2.472F, -1.142F)
          lineToRelative(-7.41F, 6.306F)
          curveToRelative(-0.82F, 0.699F, -0.82F, 1.966F, 0.0F, 2.665F)
          lineToRelative(7.41F, 6.306F)
          curveToRelative(0.975F, 0.83F, 2.473F, 0.137F, 2.473F, -1.142F)
          verticalLineToRelative(-3.988F)
          lineToRelative(6.028F, 5.13F)
          curveToRelative(0.974F, 0.83F, 2.473F, 0.137F, 2.473F, -1.142F)
          verticalLineTo(5.504F)
          curveToRelative(0.0F, -1.28F, -1.498F, -1.972F, -2.473F, -1.143F)
          lineToRelative(-6.028F, 5.131F)
          verticalLineToRelative(-3.99F)
          close()
          moveToRelative(0.0F, 7.035F)
          verticalLineToRelative(-1.076F)
          lineToRelative(7.002F, -5.958F)
          verticalLineToRelative(12.992F)
          lineTo(12.5F, 12.538F)
          close()
          moveTo(3.59F, 11.81F)
          lineTo(11.0F, 5.503F)
          verticalLineToRelative(12.993F)
          lineTo(3.59F, 12.19F)
          curveToRelative(-0.116F, -0.1F, -0.116F, -0.281F, 0.0F, -0.38F)
          close()        
      }
    }
    return _rewind24!!
  }

private var _rewind24: ImageVector? = null
