package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Wifi324: ImageVector
  get() {
    if (_wifi324 != null) {
      return _wifi324!!
    }
    _wifi324 = fluentIcon(name = "Filled.Wifi324", 324f) {
      materialPath {
          moveTo(10.938F, 16.446F)
          curveToRelative(0.587F, -0.586F, 1.537F, -0.586F, 2.123F, 0.0F)
          curveToRelative(0.587F, 0.586F, 0.587F, 1.536F, 0.0F, 2.123F)
          curveToRelative(-0.586F, 0.586F, -1.536F, 0.586F, -2.123F, 0.0F)
          curveToRelative(-0.586F, -0.587F, -0.586F, -1.537F, 0.0F, -2.123F)
          close()
          moveToRelative(-2.603F, -2.742F)
          curveToRelative(2.043F, -2.043F, 5.357F, -2.043F, 7.4F, 0.0F)
          curveToRelative(0.46F, 0.461F, 0.838F, 1.025F, 1.101F, 1.625F)
          curveToRelative(0.222F, 0.506F, -0.008F, 1.096F, -0.514F, 1.317F)
          curveToRelative(-0.506F, 0.222F, -1.096F, -0.008F, -1.318F, -0.514F)
          curveToRelative(-0.165F, -0.378F, -0.403F, -0.733F, -0.683F, -1.013F)
          curveToRelative(-1.263F, -1.263F, -3.31F, -1.263F, -4.572F, 0.0F)
          curveToRelative(-0.278F, 0.278F, -0.505F, 0.619F, -0.672F, 1.0F)
          curveToRelative(-0.221F, 0.506F, -0.811F, 0.737F, -1.317F, 0.515F)
          curveToRelative(-0.506F, -0.221F, -0.737F, -0.81F, -0.515F, -1.317F)
          curveToRelative(0.264F, -0.603F, 0.63F, -1.152F, 1.09F, -1.613F)
          close()        
      }
    }
    return _wifi324!!
  }

private var _wifi324: ImageVector? = null
