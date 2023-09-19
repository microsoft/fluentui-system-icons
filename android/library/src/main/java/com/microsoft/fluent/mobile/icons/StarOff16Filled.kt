package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarOff16: ImageVector
  get() {
    if (_starOff16 != null) {
      return _starOff16!!
    }
    _starOff16 = fluentIcon(name = "Filled.StarOff16", 16f) {
      materialPath {
          moveTo(12.358F, 13.065F)
          lineToRelative(1.788F, 1.789F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(3.482F, 3.481F)
          lineToRelative(-2.356F, 0.343F)
          curveToRelative(-0.739F, 0.107F, -1.033F, 1.014F, -0.5F, 1.535F)
          lineToRelative(2.462F, 2.4F)
          lineTo(3.653F, 13.0F)
          curveToRelative(-0.126F, 0.735F, 0.645F, 1.296F, 1.306F, 0.948F)
          lineTo(8.0F, 12.35F)
          lineToRelative(3.042F, 1.6F)
          curveToRelative(0.64F, 0.336F, 1.386F, -0.181F, 1.315F, -0.884F)
          close()
          moveToRelative(-0.59F, -3.453F)
          lineToRelative(0.007F, 0.042F)
          lineTo(6.212F, 4.09F)
          lineTo(7.194F, 2.1F)
          curveToRelative(0.33F, -0.668F, 1.284F, -0.668F, 1.614F, 0.0F)
          lineToRelative(1.521F, 3.083F)
          lineToRelative(3.401F, 0.494F)
          curveToRelative(0.739F, 0.107F, 1.033F, 1.014F, 0.5F, 1.535F)
          lineToRelative(-2.462F, 2.4F)
          close()        
      }
    }
    return _starOff16!!
  }

private var _starOff16: ImageVector? = null
