package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationArrowUp16: ImageVector
  get() {
    if (_locationArrowUp16 != null) {
      return _locationArrowUp16!!
    }
    _locationArrowUp16 = fluentIcon(name = "Filled.LocationArrowUp16", 16f) {
      materialPath {
          moveTo(14.0F, 7.0F)
          curveToRelative(0.0F, 2.876F, -3.1F, 6.01F, -4.844F, 7.544F)
          curveToRelative(-0.668F, 0.588F, -1.645F, 0.588F, -2.312F, 0.0F)
          curveTo(5.101F, 13.01F, 2.0F, 9.876F, 2.0F, 7.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveTo(6.354F, 6.854F)
          lineTo(7.5F, 5.707F)
          verticalLineTo(9.5F)
          curveTo(7.5F, 9.776F, 7.724F, 10.0F, 8.0F, 10.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(5.707F)
          lineToRelative(1.146F, 1.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          close()        
      }
    }
    return _locationArrowUp16!!
  }

private var _locationArrowUp16: ImageVector? = null
