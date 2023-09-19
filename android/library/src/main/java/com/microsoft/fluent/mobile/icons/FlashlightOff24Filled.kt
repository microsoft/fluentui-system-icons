package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlashlightOff24: ImageVector
  get() {
    if (_flashlightOff24 != null) {
      return _flashlightOff24!!
    }
    _flashlightOff24 = fluentIcon(name = "Filled.FlashlightOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(18.5F, 18.5F)
          curveToRelative(0.292F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveTo(19.06F, 15.0F)
          lineToRelative(1.41F, -1.409F)
          curveToRelative(0.878F, -0.879F, 0.878F, -2.303F, 0.0F, -3.182F)
          lineTo(13.59F, 3.53F)
          curveToRelative(-0.878F, -0.878F, -2.303F, -0.878F, -3.181F, 0.0F)
          lineToRelative(-1.41F, 1.41F)
          lineTo(19.06F, 15.0F)
          close()
          moveTo(13.0F, 16.06F)
          lineTo(7.94F, 11.0F)
          lineToRelative(-4.91F, 4.909F)
          curveToRelative(-0.879F, 0.879F, -0.879F, 2.303F, 0.0F, 3.182F)
          lineToRelative(1.88F, 1.879F)
          curveToRelative(0.878F, 0.878F, 2.303F, 0.878F, 3.182F, 0.0F)
          lineTo(13.0F, 16.06F)
          close()
          moveToRelative(-3.47F, -0.53F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.293F, 0.293F, -0.768F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(1.5F, -1.5F)
          curveToRelative(0.292F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.06F)
          close()        
      }
    }
    return _flashlightOff24!!
  }

private var _flashlightOff24: ImageVector? = null
