package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PinOff28: ImageVector
  get() {
    if (_pinOff28 != null) {
      return _pinOff28!!
    }
    _pinOff28 = fluentIcon(name = "Filled.PinOff28", 28f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(7.572F, 7.573F)
          lineToRelative(-3.625F, 1.394F)
          curveToRelative(-1.182F, 0.455F, -1.505F, 1.976F, -0.61F, 2.871F)
          lineTo(8.69F, 18.25F)
          lineTo(3.0F, 23.939F)
          verticalLineToRelative(1.06F)
          horizontalLineToRelative(1.06F)
          lineToRelative(5.69F, -5.689F)
          lineToRelative(3.132F, 3.132F)
          curveToRelative(0.895F, 0.895F, 2.416F, 0.573F, 2.87F, -0.61F)
          lineToRelative(1.395F, -3.625F)
          lineToRelative(7.572F, 7.573F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveToRelative(8.52F, 6.397F)
          lineToRelative(7.584F, 7.584F)
          lineToRelative(4.232F, -2.005F)
          curveToRelative(2.031F, -0.962F, 2.496F, -3.646F, 0.907F, -5.235F)
          lineTo(19.04F, 3.478F)
          curveToRelative(-1.59F, -1.59F, -4.274F, -1.125F, -5.236F, 0.907F)
          lineTo(11.8F, 8.617F)
          close()        
      }
    }
    return _pinOff28!!
  }

private var _pinOff28: ImageVector? = null
