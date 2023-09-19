package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignStretchHorizontal16: ImageVector
  get() {
    if (_alignStretchHorizontal16 != null) {
      return _alignStretchHorizontal16!!
    }
    _alignStretchHorizontal16 = fluentIcon(name = "Filled.AlignStretchHorizontal16", 16f) {
      materialPath {
          moveTo(3.0F, 1.5F)
          curveTo(3.0F, 1.224F, 2.776F, 1.0F, 2.5F, 1.0F)
          reflectiveCurveTo(2.0F, 1.224F, 2.0F, 1.5F)
          verticalLineToRelative(13.0F)
          curveTo(2.0F, 14.776F, 2.224F, 15.0F, 2.5F, 15.0F)
          reflectiveCurveTo(3.0F, 14.776F, 3.0F, 14.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveToRelative(11.0F, 0.0F)
          curveTo(14.0F, 1.224F, 13.776F, 1.0F, 13.5F, 1.0F)
          reflectiveCurveTo(13.0F, 1.224F, 13.0F, 1.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveToRelative(-10.0F, 3.0F)
          curveTo(4.0F, 3.672F, 4.672F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(5.0F)
          curveTo(11.328F, 3.0F, 12.0F, 3.672F, 12.0F, 4.5F)
          verticalLineToRelative(1.0F)
          curveTo(12.0F, 6.328F, 11.328F, 7.0F, 10.5F, 7.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(4.672F, 7.0F, 4.0F, 6.328F, 4.0F, 5.5F)
          verticalLineToRelative(-1.0F)
          close()
          moveToRelative(0.0F, 6.0F)
          curveTo(4.0F, 9.672F, 4.672F, 9.0F, 5.5F, 9.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-5.0F)
          curveTo(4.672F, 13.0F, 4.0F, 12.328F, 4.0F, 11.5F)
          verticalLineToRelative(-1.0F)
          close()        
      }
    }
    return _alignStretchHorizontal16!!
  }

private var _alignStretchHorizontal16: ImageVector? = null
