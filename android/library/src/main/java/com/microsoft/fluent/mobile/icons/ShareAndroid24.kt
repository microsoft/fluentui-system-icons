package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShareAndroid24: ImageVector
  get() {
    if (_shareAndroid24 != null) {
      return _shareAndroid24!!
    }
    _shareAndroid24 = fluentIcon(name = "Filled.ShareAndroid24", 24f) {
      materialPath {
          moveTo(17.0F, 3.002F)
          curveToRelative(1.656F, 0.0F, 2.998F, 1.342F, 2.998F, 2.998F)
          curveToRelative(0.0F, 1.656F, -1.342F, 2.998F, -2.998F, 2.998F)
          curveToRelative(-0.842F, 0.0F, -1.603F, -0.347F, -2.148F, -0.906F)
          lineToRelative(-5.457F, 3.12F)
          curveTo(9.464F, 11.461F, 9.5F, 11.726F, 9.5F, 12.0F)
          reflectiveCurveToRelative(-0.036F, 0.537F, -0.105F, 0.789F)
          lineToRelative(5.458F, 3.119F)
          curveToRelative(0.545F, -0.56F, 1.305F, -0.906F, 2.147F, -0.906F)
          curveToRelative(1.656F, 0.0F, 2.998F, 1.342F, 2.998F, 2.998F)
          curveToRelative(0.0F, 1.656F, -1.342F, 2.998F, -2.998F, 2.998F)
          curveToRelative(-1.656F, 0.0F, -2.998F, -1.342F, -2.998F, -2.998F)
          curveToRelative(0.0F, -0.273F, 0.037F, -0.537F, 0.105F, -0.789F)
          lineToRelative(-5.457F, -3.12F)
          curveToRelative(-0.545F, 0.56F, -1.306F, 0.907F, -2.148F, 0.907F)
          curveToRelative(-1.656F, 0.0F, -2.998F, -1.342F, -2.998F, -2.998F)
          curveToRelative(0.0F, -1.656F, 1.342F, -2.998F, 2.998F, -2.998F)
          curveToRelative(0.842F, 0.0F, 1.603F, 0.347F, 2.147F, 0.906F)
          lineToRelative(5.458F, -3.12F)
          curveTo(14.039F, 6.539F, 14.002F, 6.274F, 14.002F, 6.0F)
          curveToRelative(0.0F, -1.656F, 1.342F, -2.998F, 2.998F, -2.998F)
          close()        
      }
    }
    return _shareAndroid24!!
  }

private var _shareAndroid24: ImageVector? = null
