package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowOutlineUpRight48: ImageVector
  get() {
    if (_arrowOutlineUpRight48 != null) {
      return _arrowOutlineUpRight48!!
    }
    _arrowOutlineUpRight48 = fluentIcon(name = "Filled.ArrowOutlineUpRight48", 48f) {
      materialPath {
          moveTo(43.969F, 9.851F)
          curveToRelative(0.383F, -3.36F, -2.464F, -6.2F, -5.823F, -5.81F)
          lineTo(14.76F, 6.763F)
          curveToRelative(-3.528F, 0.41F, -5.026F, 4.712F, -2.515F, 7.226F)
          lineToRelative(2.748F, 2.751F)
          lineToRelative(-9.451F, 9.452F)
          curveToRelative(-2.05F, 2.049F, -2.05F, 5.37F, -0.004F, 7.421F)
          lineToRelative(8.833F, 8.85F)
          curveToRelative(2.05F, 2.052F, 5.376F, 2.054F, 7.428F, 0.003F)
          lineToRelative(9.464F, -9.46F)
          lineToRelative(2.843F, 2.787F)
          curveToRelative(2.526F, 2.478F, 6.797F, 0.962F, 7.198F, -2.553F)
          lineToRelative(2.665F, -23.39F)
          close()        
      }
    }
    return _arrowOutlineUpRight48!!
  }

private var _arrowOutlineUpRight48: ImageVector? = null
