package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.StackVertical20: ImageVector
  get() {
    if (_stackVertical20 != null) {
      return _stackVertical20!!
    }
    _stackVertical20 = fluentIcon(name = "Regular.StackVertical20", 20f) {
      materialPath {
          moveTo(3.0F, 5.5F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(16.0F, 16.776F, 16.0F, 16.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.672F, 12.0F, 4.0F, 12.672F, 4.0F, 13.5F)
          verticalLineToRelative(3.0F)
          curveTo(4.0F, 16.776F, 3.776F, 17.0F, 3.5F, 17.0F)
          reflectiveCurveTo(3.0F, 16.776F, 3.0F, 16.5F)
          verticalLineToRelative(-11.0F)
          close()
          moveToRelative(1.0F, 6.0F)
          curveTo(4.418F, 11.186F, 4.937F, 11.0F, 5.5F, 11.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.563F, 0.0F, 1.082F, 0.186F, 1.5F, 0.5F)
          verticalLineToRelative(-2.0F)
          curveTo(16.0F, 8.672F, 15.328F, 8.0F, 14.5F, 8.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.672F, 8.0F, 4.0F, 8.672F, 4.0F, 9.5F)
          verticalLineToRelative(2.0F)
          close()
          moveToRelative(12.0F, -6.0F)
          curveTo(16.0F, 4.672F, 15.328F, 4.0F, 14.5F, 4.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.672F, 4.0F, 4.0F, 4.672F, 4.0F, 5.5F)
          verticalLineToRelative(2.0F)
          curveTo(4.418F, 7.186F, 4.937F, 7.0F, 5.5F, 7.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.563F, 0.0F, 1.082F, 0.186F, 1.5F, 0.5F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _stackVertical20!!
  }

private var _stackVertical20: ImageVector? = null
