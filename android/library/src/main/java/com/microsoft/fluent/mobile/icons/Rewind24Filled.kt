package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Rewind24: ImageVector
  get() {
    if (_rewind24 != null) {
      return _rewind24!!
    }
    _rewind24 = fluentIcon(name = "Filled.Rewind24", 24f) {
      materialPath {
          moveTo(10.03F, 4.362F)
          curveToRelative(0.974F, -0.83F, 2.472F, -0.137F, 2.472F, 1.142F)
          verticalLineToRelative(3.99F)
          lineToRelative(6.027F, -5.13F)
          curveToRelative(0.974F, -0.83F, 2.473F, -0.138F, 2.473F, 1.141F)
          verticalLineToRelative(12.993F)
          curveToRelative(0.0F, 0.879F, -0.707F, 1.48F, -1.465F, 1.503F)
          horizontalLineTo(19.45F)
          curveToRelative(-0.318F, -0.01F, -0.64F, -0.122F, -0.92F, -0.36F)
          lineToRelative(-6.028F, -5.13F)
          verticalLineToRelative(3.986F)
          curveToRelative(0.0F, 1.279F, -1.498F, 1.971F, -2.473F, 1.142F)
          lineToRelative(-7.41F, -6.306F)
          curveToRelative(-0.82F, -0.699F, -0.82F, -1.966F, 0.0F, -2.665F)
          lineToRelative(7.41F, -6.306F)
          close()
          moveToRelative(-7.41F, 6.306F)
          lineToRelative(0.486F, 0.57F)
          close()        
      }
    }
    return _rewind24!!
  }

private var _rewind24: ImageVector? = null
