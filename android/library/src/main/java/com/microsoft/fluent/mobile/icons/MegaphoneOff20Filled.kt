package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MegaphoneOff20: ImageVector
  get() {
    if (_megaphoneOff20 != null) {
      return _megaphoneOff20!!
    }
    _megaphoneOff20 = fluentIcon(name = "Filled.MegaphoneOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(3.335F, 3.334F)
          lineToRelative(-2.367F, 0.63F)
          curveTo(2.457F, 6.995F, 2.0F, 7.589F, 2.0F, 8.269F)
          verticalLineToRelative(2.511F)
          curveToRelative(0.0F, 0.646F, 0.413F, 1.22F, 1.026F, 1.423F)
          lineTo(5.0F, 12.86F)
          verticalLineToRelative(0.89F)
          curveTo(5.0F, 15.545F, 6.455F, 17.0F, 8.25F, 17.0F)
          curveToRelative(1.371F, 0.0F, 2.543F, -0.849F, 3.02F, -2.05F)
          lineToRelative(4.46F, 1.487F)
          lineToRelative(1.416F, 1.417F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveTo(6.0F, 13.194F)
          lineToRelative(4.32F, 1.44F)
          curveTo(9.977F, 15.437F, 9.179F, 16.0F, 8.25F, 16.0F)
          curveTo(7.007F, 16.0F, 6.0F, 14.993F, 6.0F, 13.75F)
          verticalLineToRelative(-0.556F)
          close()
          moveToRelative(12.0F, 1.919F)
          curveToRelative(0.0F, 0.227F, -0.05F, 0.44F, -0.137F, 0.629F)
          lineTo(7.713F, 5.592F)
          lineToRelative(8.4F, -2.24F)
          curveTo(17.066F, 3.098F, 18.0F, 3.816F, 18.0F, 4.802F)
          verticalLineToRelative(10.31F)
          close()        
      }
    }
    return _megaphoneOff20!!
  }

private var _megaphoneOff20: ImageVector? = null
