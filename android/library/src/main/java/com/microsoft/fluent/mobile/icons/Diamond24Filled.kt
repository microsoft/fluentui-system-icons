package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Diamond24: ImageVector
  get() {
    if (_diamond24 != null) {
      return _diamond24!!
    }
    _diamond24 = fluentIcon(name = "Filled.Diamond24", 24f) {
      materialPath {
          moveTo(2.659F, 13.593F)
          curveToRelative(-0.879F, -0.88F, -0.879F, -2.304F, 0.0F, -3.182F)
          lineToRelative(7.752F, -7.752F)
          curveToRelative(0.878F, -0.879F, 2.303F, -0.879F, 3.182F, 0.0F)
          lineToRelative(7.751F, 7.752F)
          curveToRelative(0.879F, 0.878F, 0.879F, 2.303F, 0.0F, 3.182F)
          lineToRelative(-7.751F, 7.751F)
          curveToRelative(-0.88F, 0.879F, -2.304F, 0.879F, -3.182F, 0.0F)
          lineToRelative(-7.752F, -7.751F)
          close()        
      }
    }
    return _diamond24!!
  }

private var _diamond24: ImageVector? = null
