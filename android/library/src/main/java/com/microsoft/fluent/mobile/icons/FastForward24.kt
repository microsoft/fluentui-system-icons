package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FastForward24: ImageVector
  get() {
    if (_fastForward24 != null) {
      return _fastForward24!!
    }
    _fastForward24 = fluentIcon(name = "Filled.FastForward24", 24f) {
      materialPath {
          moveTo(13.97F, 4.362F)
          curveToRelative(-0.974F, -0.828F, -2.472F, -0.136F, -2.472F, 1.143F)
          verticalLineToRelative(3.988F)
          lineToRelative(-6.027F, -5.13F)
          curveTo(4.496F, 3.534F, 2.998F, 4.227F, 2.998F, 5.506F)
          verticalLineToRelative(12.993F)
          curveToRelative(0.0F, 0.878F, 0.707F, 1.48F, 1.465F, 1.502F)
          horizontalLineTo(4.55F)
          curveToRelative(0.318F, -0.01F, 0.64F, -0.122F, 0.92F, -0.36F)
          lineToRelative(6.028F, -5.13F)
          verticalLineToRelative(3.987F)
          curveToRelative(0.0F, 1.279F, 1.498F, 1.971F, 2.472F, 1.142F)
          lineToRelative(7.41F, -6.306F)
          curveToRelative(0.821F, -0.699F, 0.821F, -1.966F, 0.0F, -2.665F)
          lineToRelative(-7.41F, -6.307F)
          close()        
      }
    }
    return _fastForward24!!
  }

private var _fastForward24: ImageVector? = null
