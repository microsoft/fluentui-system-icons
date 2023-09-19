package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonAvailable24: ImageVector
  get() {
    if (_personAvailable24 != null) {
      return _personAvailable24!!
    }
    _personAvailable24 = fluentIcon(name = "Filled.PersonAvailable24", 24f) {
      materialPath {
          moveTo(17.5F, 12.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, 2.463F, 5.5F, 5.5F)
          curveToRelative(0.0F, 3.038F, -2.462F, 5.5F, -5.5F, 5.5F)
          curveToRelative(-3.037F, 0.0F, -5.5F, -2.462F, -5.5F, -5.5F)
          curveToRelative(0.0F, -3.037F, 2.463F, -5.5F, 5.5F, -5.5F)
          close()
          moveToRelative(-5.477F, 2.0F)
          curveTo(11.376F, 15.01F, 11.0F, 16.21F, 11.0F, 17.5F)
          curveToRelative(0.0F, 1.63F, 0.6F, 3.12F, 1.592F, 4.262F)
          curveToRelative(-0.795F, 0.16F, -1.66F, 0.24F, -2.592F, 0.24F)
          curveToRelative(-3.42F, 0.0F, -5.944F, -1.073F, -7.486F, -3.237F)
          curveToRelative(-0.332F, -0.466F, -0.51F, -1.024F, -0.51F, -1.596F)
          verticalLineToRelative(-0.92F)
          curveTo(2.004F, 15.007F, 3.01F, 14.0F, 4.253F, 14.0F)
          horizontalLineToRelative(7.77F)
          close()
          moveToRelative(2.83F, 3.147F)
          curveToRelative(-0.194F, -0.196F, -0.51F, -0.196F, -0.706F, 0.0F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.512F, 0.0F, 0.707F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.195F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(-0.195F, -0.196F, -0.512F, -0.196F, -0.707F, 0.0F)
          lineTo(16.5F, 18.793F)
          lineToRelative(-1.646F, -1.646F)
          close()
          moveTo(10.0F, 2.005F)
          curveToRelative(2.762F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.238F, 5.0F, -5.0F, 5.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          close()        
      }
    }
    return _personAvailable24!!
  }

private var _personAvailable24: ImageVector? = null
