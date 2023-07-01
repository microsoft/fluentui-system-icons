package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignCenterVertical20: ImageVector
  get() {
    if (_alignCenterVertical20 != null) {
      return _alignCenterVertical20!!
    }
    _alignCenterVertical20 = fluentIcon(name = "Filled.AlignCenterVertical20", 20f) {
      materialPath {
          moveTo(10.5F, 18.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(16.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(9.0F)
          horizontalLineTo(6.0F)
          curveTo(4.895F, 9.0F, 4.0F, 8.105F, 4.0F, 7.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(2.5F)
          curveTo(10.0F, 2.224F, 10.224F, 2.0F, 10.5F, 2.0F)
          reflectiveCurveTo(11.0F, 2.224F, 11.0F, 2.5F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          close()        
      }
    }
    return _alignCenterVertical20!!
  }

private var _alignCenterVertical20: ImageVector? = null
