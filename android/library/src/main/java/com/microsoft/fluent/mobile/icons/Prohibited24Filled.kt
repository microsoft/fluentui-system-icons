package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Prohibited24: ImageVector
  get() {
    if (_prohibited24 != null) {
      return _prohibited24!!
    }
    _prohibited24 = fluentIcon(name = "Filled.Prohibited24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(6.113F, 5.654F)
          lineToRelative(-10.46F, 10.46F)
          curveTo(8.88F, 18.985F, 10.38F, 19.5F, 12.0F, 19.5F)
          curveToRelative(4.142F, 0.0F, 7.5F, -3.358F, 7.5F, -7.5F)
          curveToRelative(0.0F, -1.62F, -0.514F, -3.12F, -1.387F, -4.346F)
          close()
          moveTo(12.0F, 4.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, 3.358F, -7.5F, 7.5F)
          curveToRelative(0.0F, 1.62F, 0.514F, 3.12F, 1.387F, 4.346F)
          lineToRelative(10.46F, -10.459F)
          curveTo(15.12F, 5.014F, 13.62F, 4.5F, 12.0F, 4.5F)
          close()        
      }
    }
    return _prohibited24!!
  }

private var _prohibited24: ImageVector? = null
