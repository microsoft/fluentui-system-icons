package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonHeart20: ImageVector
  get() {
    if (_personHeart20 != null) {
      return _personHeart20!!
    }
    _personHeart20 = fluentIcon(name = "Filled.PersonHeart20", 20f) {
      materialPath {
          moveTo(9.0F, 2.0F)
          curveTo(6.79F, 2.0F, 5.0F, 3.79F, 5.0F, 6.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveToRelative(-4.991F, 9.0F)
          curveTo(2.903F, 11.0F, 2.0F, 11.887F, 2.0F, 13.0F)
          curveToRelative(0.0F, 1.691F, 0.833F, 2.966F, 2.135F, 3.797F)
          curveTo(5.417F, 17.614F, 7.145F, 18.0F, 9.0F, 18.0F)
          curveToRelative(0.955F, 0.0F, 1.876F, -0.102F, 2.72F, -0.313F)
          lineToRelative(-1.83F, -2.002F)
          curveToRelative(-1.126F, -1.231F, -1.19F, -3.097F, -0.153F, -4.403F)
          curveToRelative(0.08F, -0.1F, 0.163F, -0.194F, 0.251F, -0.282F)
          horizontalLineToRelative(-5.98F)
          close()
          moveToRelative(10.49F, 1.003F)
          lineToRelative(-0.628F, -0.493F)
          curveToRelative(-1.035F, -0.812F, -2.532F, -0.636F, -3.35F, 0.394F)
          curveToRelative(-0.733F, 0.921F, -0.688F, 2.238F, 0.106F, 3.106F)
          lineToRelative(3.503F, 3.83F)
          curveToRelative(0.199F, 0.217F, 0.54F, 0.217F, 0.738F, 0.0F)
          lineToRelative(3.504F, -3.83F)
          curveToRelative(0.793F, -0.869F, 0.839F, -2.185F, 0.107F, -3.105F)
          curveToRelative(-0.818F, -1.03F, -2.315F, -1.207F, -3.35F, -0.395F)
          lineToRelative(-0.63F, 0.493F)
          close()        
      }
    }
    return _personHeart20!!
  }

private var _personHeart20: ImageVector? = null
