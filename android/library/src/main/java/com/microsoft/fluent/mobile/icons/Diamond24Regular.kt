package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Diamond24: ImageVector
  get() {
    if (_diamond24 != null) {
      return _diamond24!!
    }
    _diamond24 = fluentIcon(name = "Regular.Diamond24", 24f) {
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
          moveToRelative(1.06F, -2.122F)
          curveToRelative(-0.292F, 0.293F, -0.292F, 0.768F, 0.0F, 1.06F)
          lineToRelative(7.752F, 7.753F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.06F, 0.0F)
          lineToRelative(7.753F, -7.752F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.06F)
          lineTo(12.532F, 3.72F)
          curveToRelative(-0.293F, -0.293F, -0.768F, -0.293F, -1.06F, 0.0F)
          lineTo(3.72F, 11.47F)
          close()        
      }
    }
    return _diamond24!!
  }

private var _diamond24: ImageVector? = null
