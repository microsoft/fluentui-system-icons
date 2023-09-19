package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SplitVertical20: ImageVector
  get() {
    if (_splitVertical20 != null) {
      return _splitVertical20!!
    }
    _splitVertical20 = fluentIcon(name = "Filled.SplitVertical20", 20f) {
      materialPath {
          moveTo(10.0F, 2.5F)
          curveTo(10.0F, 2.224F, 9.776F, 2.0F, 9.5F, 2.0F)
          reflectiveCurveTo(9.0F, 2.224F, 9.0F, 2.5F)
          verticalLineToRelative(15.0F)
          curveTo(9.0F, 17.776F, 9.224F, 18.0F, 9.5F, 18.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-15.0F)
          close()
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(12.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(9.0F, 10.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(12.0F)
          close()        
      }
    }
    return _splitVertical20!!
  }

private var _splitVertical20: ImageVector? = null
