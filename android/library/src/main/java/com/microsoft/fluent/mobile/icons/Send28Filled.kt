package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Send28: ImageVector
  get() {
    if (_send28 != null) {
      return _send28!!
    }
    _send28 = fluentIcon(name = "Filled.Send28", 28f) {
      materialPath {
          moveTo(3.79F, 2.625F)
          curveToRelative(-0.963F, -0.46F, -2.021F, 0.42F, -1.746F, 1.451F)
          lineToRelative(2.016F, 7.533F)
          curveToRelative(0.103F, 0.387F, 0.428F, 0.675F, 0.824F, 0.732F)
          lineToRelative(9.884F, 1.412F)
          curveToRelative(0.286F, 0.04F, 0.286F, 0.454F, 0.0F, 0.495F)
          lineToRelative(-9.883F, 1.411F)
          curveToRelative(-0.396F, 0.057F, -0.72F, 0.345F, -0.824F, 0.732F)
          lineToRelative(-2.017F, 7.537F)
          curveToRelative(-0.275F, 1.03F, 0.783F, 1.91F, 1.746F, 1.451F)
          lineTo(25.288F, 15.13F)
          curveToRelative(0.949F, -0.452F, 0.949F, -1.804F, 0.0F, -2.257F)
          lineTo(3.79F, 2.626F)
          close()        
      }
    }
    return _send28!!
  }

private var _send28: ImageVector? = null
