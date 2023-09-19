package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SplitVertical32: ImageVector
  get() {
    if (_splitVertical32 != null) {
      return _splitVertical32!!
    }
    _splitVertical32 = fluentIcon(name = "Regular.SplitVertical32", 32f) {
      materialPath {
          moveTo(15.0F, 29.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(26.0F)
          close()
          moveToRelative(11.5F, -5.0F)
          horizontalLineToRelative(-8.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-13.0F)
          curveTo(30.0F, 7.567F, 28.433F, 6.0F, 26.5F, 6.0F)
          horizontalLineToRelative(-8.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(8.0F)
          curveTo(27.328F, 8.0F, 28.0F, 8.672F, 28.0F, 9.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          close()
          moveToRelative(-13.0F, -18.0F)
          horizontalLineToRelative(-8.0F)
          curveTo(3.567F, 6.0F, 2.0F, 7.567F, 2.0F, 9.5F)
          verticalLineToRelative(13.0F)
          curveTo(2.0F, 24.433F, 3.567F, 26.0F, 5.5F, 26.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(-8.0F)
          curveTo(4.672F, 24.0F, 4.0F, 23.328F, 4.0F, 22.5F)
          verticalLineToRelative(-13.0F)
          curveTo(4.0F, 8.672F, 4.672F, 8.0F, 5.5F, 8.0F)
          horizontalLineToRelative(8.0F)
          verticalLineTo(6.0F)
          close()        
      }
    }
    return _splitVertical32!!
  }

private var _splitVertical32: ImageVector? = null
