package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignDistributeRight16: ImageVector
  get() {
    if (_alignDistributeRight16 != null) {
      return _alignDistributeRight16!!
    }
    _alignDistributeRight16 = fluentIcon(name = "Filled.AlignDistributeRight16", 16f) {
      materialPath {
          moveTo(15.0F, 1.5F)
          curveTo(15.0F, 1.224F, 14.776F, 1.0F, 14.5F, 1.0F)
          reflectiveCurveTo(14.0F, 1.224F, 14.0F, 1.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveToRelative(-7.0F, 0.0F)
          curveTo(8.0F, 1.224F, 7.776F, 1.0F, 7.5F, 1.0F)
          reflectiveCurveTo(7.0F, 1.224F, 7.0F, 1.5F)
          verticalLineToRelative(13.0F)
          curveTo(7.0F, 14.776F, 7.224F, 15.0F, 7.5F, 15.0F)
          reflectiveCurveTo(8.0F, 14.776F, 8.0F, 14.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveTo(3.5F, 13.0F)
          curveTo(2.672F, 13.0F, 2.0F, 12.328F, 2.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          curveTo(2.0F, 3.672F, 2.672F, 3.0F, 3.5F, 3.0F)
          horizontalLineToRelative(1.0F)
          curveTo(5.328F, 3.0F, 6.0F, 3.672F, 6.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(6.0F, 12.328F, 5.328F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(-1.0F)
          close()
          moveTo(9.0F, 9.5F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-3.0F)
          curveTo(13.0F, 5.672F, 12.328F, 5.0F, 11.5F, 5.0F)
          horizontalLineToRelative(-1.0F)
          curveTo(9.672F, 5.0F, 9.0F, 5.672F, 9.0F, 6.5F)
          verticalLineToRelative(3.0F)
          close()        
      }
    }
    return _alignDistributeRight16!!
  }

private var _alignDistributeRight16: ImageVector? = null
