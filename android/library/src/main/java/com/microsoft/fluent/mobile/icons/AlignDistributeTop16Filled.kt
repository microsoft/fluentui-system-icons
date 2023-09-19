package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignDistributeTop16: ImageVector
  get() {
    if (_alignDistributeTop16 != null) {
      return _alignDistributeTop16!!
    }
    _alignDistributeTop16 = fluentIcon(name = "Filled.AlignDistributeTop16", 16f) {
      materialPath {
          moveTo(1.5F, 1.0F)
          curveTo(1.224F, 1.0F, 1.0F, 1.224F, 1.0F, 1.5F)
          reflectiveCurveTo(1.224F, 2.0F, 1.5F, 2.0F)
          horizontalLineToRelative(13.0F)
          curveTo(14.776F, 2.0F, 15.0F, 1.776F, 15.0F, 1.5F)
          reflectiveCurveTo(14.776F, 1.0F, 14.5F, 1.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(0.0F, 7.0F)
          curveTo(1.224F, 8.0F, 1.0F, 8.224F, 1.0F, 8.5F)
          reflectiveCurveTo(1.224F, 9.0F, 1.5F, 9.0F)
          horizontalLineToRelative(13.0F)
          curveTo(14.776F, 9.0F, 15.0F, 8.776F, 15.0F, 8.5F)
          reflectiveCurveTo(14.776F, 8.0F, 14.5F, 8.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(8.0F, 6.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-3.0F)
          curveTo(5.672F, 10.0F, 5.0F, 10.672F, 5.0F, 11.5F)
          verticalLineToRelative(1.0F)
          curveTo(5.0F, 13.328F, 5.672F, 14.0F, 6.5F, 14.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveToRelative(2.0F, -7.0F)
          curveTo(12.328F, 7.0F, 13.0F, 6.328F, 13.0F, 5.5F)
          verticalLineToRelative(-1.0F)
          curveTo(13.0F, 3.672F, 12.328F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 3.0F, 3.0F, 3.672F, 3.0F, 4.5F)
          verticalLineToRelative(1.0F)
          curveTo(3.0F, 6.328F, 3.672F, 7.0F, 4.5F, 7.0F)
          horizontalLineToRelative(7.0F)
          close()        
      }
    }
    return _alignDistributeTop16!!
  }

private var _alignDistributeTop16: ImageVector? = null
