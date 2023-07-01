package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pen24: ImageVector
  get() {
    if (_pen24 != null) {
      return _pen24!!
    }
    _pen24 = fluentIcon(name = "Filled.Pen24", 24f) {
      materialPath {
          moveTo(15.891F, 3.047F)
          curveToRelative(1.397F, -1.397F, 3.663F, -1.397F, 5.06F, 0.0F)
          curveToRelative(1.398F, 1.397F, 1.398F, 3.663F, 0.001F, 5.06F)
          lineTo(20.061F, 9.0F)
          curveToRelative(1.264F, 1.27F, 1.263F, 3.324F, -0.005F, 4.592F)
          lineToRelative(-1.784F, 1.783F)
          curveToRelative(-0.292F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.06F)
          lineToRelative(1.783F, -1.784F)
          curveToRelative(0.682F, -0.682F, 0.684F, -1.786F, 0.005F, -2.47F)
          lineToRelative(-9.998F, 10.0F)
          curveToRelative(-0.407F, 0.406F, -0.918F, 0.691F, -1.477F, 0.825F)
          lineTo(2.924F, 21.98F)
          curveToRelative(-0.254F, 0.06F, -0.52F, -0.015F, -0.704F, -0.2F)
          curveToRelative(-0.185F, -0.183F, -0.26F, -0.45F, -0.2F, -0.703F)
          lineToRelative(1.096F, -4.602F)
          curveToRelative(0.133F, -0.559F, 0.419F, -1.07F, 0.825F, -1.476F)
          lineToRelative(11.95F, -11.952F)
          close()        
      }
    }
    return _pen24!!
  }

private var _pen24: ImageVector? = null
