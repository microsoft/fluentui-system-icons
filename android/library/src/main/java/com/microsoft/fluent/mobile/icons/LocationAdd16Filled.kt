package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationAdd16: ImageVector
  get() {
    if (_locationAdd16 != null) {
      return _locationAdd16!!
    }
    _locationAdd16 = fluentIcon(name = "Filled.LocationAdd16", 16f) {
      materialPath {
          moveTo(9.156F, 14.544F)
          curveTo(10.899F, 13.01F, 14.0F, 9.876F, 14.0F, 7.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          reflectiveCurveTo(2.0F, 3.686F, 2.0F, 7.0F)
          curveToRelative(0.0F, 2.876F, 3.1F, 6.01F, 4.844F, 7.544F)
          curveToRelative(0.667F, 0.588F, 1.644F, 0.588F, 2.312F, 0.0F)
          close()
          moveTo(8.0F, 4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(10.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(10.276F, 7.0F, 10.0F, 7.0F)
          horizontalLineTo(8.5F)
          verticalLineToRelative(1.5F)
          curveTo(8.5F, 8.776F, 8.276F, 9.0F, 8.0F, 9.0F)
          reflectiveCurveTo(7.5F, 8.776F, 7.5F, 8.5F)
          verticalLineTo(7.0F)
          horizontalLineTo(6.0F)
          curveTo(5.724F, 7.0F, 5.5F, 6.776F, 5.5F, 6.5F)
          reflectiveCurveTo(5.724F, 6.0F, 6.0F, 6.0F)
          horizontalLineToRelative(1.5F)
          verticalLineTo(4.5F)
          curveTo(7.5F, 4.224F, 7.724F, 4.0F, 8.0F, 4.0F)
          close()        
      }
    }
    return _locationAdd16!!
  }

private var _locationAdd16: ImageVector? = null
