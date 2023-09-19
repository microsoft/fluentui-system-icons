package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlashOff24: ImageVector
  get() {
    if (_flashOff24 != null) {
      return _flashOff24!!
    }
    _flashOff24 = fluentIcon(name = "Filled.FlashOff24", 24f) {
      materialPath {
          moveTo(14.436F, 15.497F)
          lineToRelative(6.283F, 6.284F)
          curveToRelative(0.293F, 0.292F, 0.768F, 0.292F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.061F)
          lineTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(5.939F, 7.0F)
          lineToRelative(-1.836F, 5.153F)
          curveToRelative(-0.405F, 1.137F, 0.435F, 2.333F, 1.642F, 2.337F)
          lineToRelative(1.568F, 0.006F)
          lineToRelative(-1.269F, 5.668F)
          curveToRelative(-0.33F, 1.478F, 1.487F, 2.46F, 2.541F, 1.372F)
          lineToRelative(5.851F, -6.039F)
          close()
          moveToRelative(5.21F, -5.377F)
          lineToRelative(-3.122F, 3.222F)
          lineToRelative(-9.47F, -9.47F)
          lineToRelative(0.37F, -1.042F)
          curveTo(7.601F, 2.332F, 8.073F, 2.0F, 8.602F, 2.0F)
          horizontalLineToRelative(6.453F)
          curveToRelative(0.853F, 0.0F, 1.456F, 0.836F, 1.186F, 1.645F)
          lineTo(14.79F, 8.0F)
          horizontalLineToRelative(3.958F)
          curveToRelative(1.104F, 0.0F, 1.666F, 1.327F, 0.898F, 2.12F)
          close()        
      }
    }
    return _flashOff24!!
  }

private var _flashOff24: ImageVector? = null
