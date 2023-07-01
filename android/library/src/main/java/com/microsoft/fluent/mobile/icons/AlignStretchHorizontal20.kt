package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignStretchHorizontal20: ImageVector
  get() {
    if (_alignStretchHorizontal20 != null) {
      return _alignStretchHorizontal20!!
    }
    _alignStretchHorizontal20 = fluentIcon(name = "Filled.AlignStretchHorizontal20", 20f) {
      materialPath {
          moveTo(3.0F, 17.5F)
          curveTo(3.0F, 17.776F, 3.224F, 18.0F, 3.5F, 18.0F)
          reflectiveCurveTo(4.0F, 17.776F, 4.0F, 17.5F)
          verticalLineToRelative(-15.0F)
          curveTo(4.0F, 2.224F, 3.776F, 2.0F, 3.5F, 2.0F)
          reflectiveCurveTo(3.0F, 2.224F, 3.0F, 2.5F)
          verticalLineToRelative(15.0F)
          close()
          moveToRelative(13.0F, 0.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-15.0F)
          curveTo(17.0F, 2.224F, 16.776F, 2.0F, 16.5F, 2.0F)
          reflectiveCurveTo(16.0F, 2.224F, 16.0F, 2.5F)
          verticalLineToRelative(15.0F)
          close()
          moveTo(13.0F, 16.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          close()
          moveToRelative(2.0F, -9.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(7.0F)
          curveTo(5.895F, 9.0F, 5.0F, 8.105F, 5.0F, 7.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(1.0F)
          close()        
      }
    }
    return _alignStretchHorizontal20!!
  }

private var _alignStretchHorizontal20: ImageVector? = null
