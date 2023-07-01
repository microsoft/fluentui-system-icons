package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Search12: ImageVector
  get() {
    if (_search12 != null) {
      return _search12!!
    }
    _search12 = fluentIcon(name = "Regular.Search12", 12f) {
      materialPath {
          moveTo(5.0F, 1.0F)
          curveTo(2.79F, 1.0F, 1.0F, 2.79F, 1.0F, 5.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          curveToRelative(0.924F, 0.0F, 1.775F, -0.313F, 2.452F, -0.84F)
          lineToRelative(2.694F, 2.693F)
          curveToRelative(0.195F, 0.196F, 0.511F, 0.196F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          lineTo(8.16F, 7.453F)
          curveTo(8.686F, 6.776F, 9.0F, 5.924F, 9.0F, 5.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveTo(2.0F, 5.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          close()        
      }
    }
    return _search12!!
  }

private var _search12: ImageVector? = null
