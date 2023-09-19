package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PenOff24: ImageVector
  get() {
    if (_penOff24 != null) {
      return _penOff24!!
    }
    _penOff24 = fluentIcon(name = "Filled.PenOff24", 24f) {
      materialPath {
          moveTo(14.0F, 15.06F)
          lineToRelative(6.72F, 6.72F)
          curveToRelative(0.292F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.294F, -0.767F, -0.294F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.292F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(8.94F, 10.0F)
          lineToRelative(-5.0F, 4.999F)
          curveToRelative(-0.406F, 0.406F, -0.692F, 0.917F, -0.825F, 1.476F)
          lineTo(2.02F, 21.077F)
          curveToRelative(-0.06F, 0.253F, 0.015F, 0.52F, 0.2F, 0.704F)
          curveToRelative(0.184F, 0.184F, 0.45F, 0.26F, 0.704F, 0.199F)
          lineToRelative(4.601F, -1.096F)
          curveToRelative(0.56F, -0.133F, 1.07F, -0.418F, 1.477F, -0.825F)
          lineTo(14.0F, 15.06F)
          close()
          moveToRelative(4.995F, -2.53F)
          lineToRelative(-1.642F, 1.642F)
          lineToRelative(1.061F, 1.06F)
          lineToRelative(1.642F, -1.641F)
          curveToRelative(1.268F, -1.268F, 1.27F, -3.322F, 0.005F, -4.592F)
          lineToRelative(0.891F, -0.891F)
          curveToRelative(1.397F, -1.398F, 1.397F, -3.664F, 0.0F, -5.06F)
          curveToRelative(-1.398F, -1.398F, -3.664F, -1.398F, -5.06F, 0.0F)
          lineToRelative(-4.832F, 4.83F)
          lineToRelative(5.061F, 5.061F)
          lineTo(19.0F, 10.06F)
          curveToRelative(0.679F, 0.685F, 0.677F, 1.79F, -0.005F, 2.471F)
          close()        
      }
    }
    return _penOff24!!
  }

private var _penOff24: ImageVector? = null
