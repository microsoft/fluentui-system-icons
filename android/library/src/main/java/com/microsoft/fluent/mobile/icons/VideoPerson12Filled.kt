package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoPerson12: ImageVector
  get() {
    if (_videoPerson12 != null) {
      return _videoPerson12!!
    }
    _videoPerson12 = fluentIcon(name = "Filled.VideoPerson12", 12f) {
      materialPath {
          moveTo(7.5F, 5.5F)
          curveTo(7.5F, 6.328F, 6.828F, 7.0F, 6.0F, 7.0F)
          reflectiveCurveTo(4.5F, 6.328F, 4.5F, 5.5F)
          reflectiveCurveTo(5.172F, 4.0F, 6.0F, 4.0F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          close()
          moveTo(1.0F, 3.5F)
          curveTo(1.0F, 2.672F, 1.672F, 2.0F, 2.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(10.328F, 2.0F, 11.0F, 2.672F, 11.0F, 3.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(1.672F, 10.0F, 1.0F, 9.328F, 1.0F, 8.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveTo(8.0F, 9.0F)
          horizontalLineToRelative(1.5F)
          curveTo(9.776F, 9.0F, 10.0F, 8.776F, 10.0F, 8.5F)
          verticalLineToRelative(-5.0F)
          curveTo(10.0F, 3.224F, 9.776F, 3.0F, 9.5F, 3.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(2.224F, 3.0F, 2.0F, 3.224F, 2.0F, 3.5F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 8.776F, 2.224F, 9.0F, 2.5F, 9.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(8.5F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineTo(9.0F)
          close()        
      }
    }
    return _videoPerson12!!
  }

private var _videoPerson12: ImageVector? = null
