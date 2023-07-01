package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EditOff24: ImageVector
  get() {
    if (_editOff24 != null) {
      return _editOff24!!
    }
    _editOff24 = fluentIcon(name = "Filled.EditOff24", 24f) {
      materialPath {
          moveTo(14.0F, 15.062F)
          lineToRelative(6.72F, 6.72F)
          curveToRelative(0.292F, 0.292F, 0.767F, 0.292F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.294F, 0.293F, -0.769F, 0.0F, -1.061F)
          lineTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.294F, -0.767F, -0.294F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.292F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(8.94F, 10.0F)
          lineToRelative(-5.0F, 5.0F)
          curveToRelative(-0.406F, 0.406F, -0.692F, 0.917F, -0.825F, 1.476F)
          lineTo(2.02F, 21.078F)
          curveToRelative(-0.06F, 0.253F, 0.015F, 0.52F, 0.2F, 0.704F)
          curveToRelative(0.184F, 0.184F, 0.45F, 0.26F, 0.704F, 0.199F)
          lineToRelative(4.601F, -1.096F)
          curveToRelative(0.56F, -0.133F, 1.07F, -0.418F, 1.477F, -0.825F)
          lineTo(14.0F, 15.062F)
          close()
          moveToRelative(5.0F, -5.0F)
          lineToRelative(-2.88F, 2.878F)
          lineToRelative(-5.06F, -5.06F)
          lineTo(13.938F, 5.0F)
          lineToRelative(5.06F, 5.061F)
          close()
          moveToRelative(-3.11F, -7.015F)
          curveToRelative(1.397F, -1.397F, 3.663F, -1.397F, 5.06F, 0.0F)
          curveToRelative(1.398F, 1.397F, 1.398F, 3.663F, 0.001F, 5.06F)
          lineTo(20.06F, 9.002F)
          lineTo(15.0F, 3.94F)
          lineToRelative(0.891F, -0.892F)
          close()        
      }
    }
    return _editOff24!!
  }

private var _editOff24: ImageVector? = null
