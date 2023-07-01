package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoPerson20: ImageVector
  get() {
    if (_videoPerson20 != null) {
      return _videoPerson20!!
    }
    _videoPerson20 = fluentIcon(name = "Filled.VideoPerson20", 20f) {
      materialPath {
          moveTo(12.5F, 8.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveTo(7.5F, 9.88F, 7.5F, 8.5F)
          reflectiveCurveTo(8.62F, 6.0F, 10.0F, 6.0F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          close()
          moveTo(2.0F, 5.5F)
          curveTo(2.0F, 4.672F, 2.672F, 4.0F, 3.5F, 4.0F)
          horizontalLineToRelative(13.0F)
          curveTo(17.328F, 4.0F, 18.0F, 4.672F, 18.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-13.0F)
          curveTo(2.672F, 16.0F, 2.0F, 15.328F, 2.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveTo(14.0F, 15.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-9.0F)
          curveTo(17.0F, 5.224F, 16.776F, 5.0F, 16.5F, 5.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 5.0F, 3.0F, 5.224F, 3.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(3.0F, 14.776F, 3.224F, 15.0F, 3.5F, 15.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(-1.5F)
          curveTo(6.0F, 12.672F, 6.672F, 12.0F, 7.5F, 12.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineTo(15.0F)
          close()        
      }
    }
    return _videoPerson20!!
  }

private var _videoPerson20: ImageVector? = null
