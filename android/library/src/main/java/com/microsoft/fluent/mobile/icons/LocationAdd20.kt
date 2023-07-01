package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationAdd20: ImageVector
  get() {
    if (_locationAdd20 != null) {
      return _locationAdd20!!
    }
    _locationAdd20 = fluentIcon(name = "Filled.LocationAdd20", 20f) {
      materialPath {
          moveTo(14.95F, 4.051F)
          curveToRelative(2.733F, 2.735F, 2.733F, 7.17F, 0.0F, 9.904F)
          lineToRelative(-1.128F, 1.114F)
          lineToRelative(-2.436F, 2.37F)
          curveToRelative(-0.73F, 0.706F, -1.864F, 0.746F, -2.64F, 0.118F)
          lineToRelative(-0.132F, -0.118F)
          lineToRelative(-2.043F, -1.985F)
          lineToRelative(-1.52F, -1.499F)
          curveToRelative(-2.734F, -2.735F, -2.734F, -7.169F, 0.0F, -9.904F)
          curveToRelative(2.733F, -2.735F, 7.165F, -2.735F, 9.899F, 0.0F)
          close()
          moveTo(10.0F, 5.0F)
          curveTo(9.724F, 5.0F, 9.5F, 5.224F, 9.5F, 5.5F)
          verticalLineTo(8.0F)
          horizontalLineTo(7.0F)
          curveTo(6.724F, 8.0F, 6.5F, 8.224F, 6.5F, 8.5F)
          reflectiveCurveTo(6.724F, 9.0F, 7.0F, 9.0F)
          horizontalLineToRelative(2.5F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(9.0F)
          horizontalLineTo(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.276F, 8.0F, 13.0F, 8.0F)
          horizontalLineToRelative(-2.5F)
          verticalLineTo(5.5F)
          curveTo(10.5F, 5.224F, 10.276F, 5.0F, 10.0F, 5.0F)
          close()        
      }
    }
    return _locationAdd20!!
  }

private var _locationAdd20: ImageVector? = null
