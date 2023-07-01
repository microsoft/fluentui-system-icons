package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextboxAlignBottomRotate9020: ImageVector
  get() {
    if (_textboxAlignBottomRotate9020 != null) {
      return _textboxAlignBottomRotate9020!!
    }
    _textboxAlignBottomRotate9020 = fluentIcon(name = "Filled.TextboxAlignBottomRotate9020", 9020f) {
      materialPath {
          moveTo(3.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(6.5F, 0.0F)
          curveTo(9.224F, 5.0F, 9.0F, 5.224F, 9.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(9.0F, 14.776F, 9.224F, 15.0F, 9.5F, 15.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-9.0F)
          curveTo(10.0F, 5.224F, 9.776F, 5.0F, 9.5F, 5.0F)
          close()
          moveTo(7.0F, 5.5F)
          curveTo(7.0F, 5.224F, 6.776F, 5.0F, 6.5F, 5.0F)
          reflectiveCurveTo(6.0F, 5.224F, 6.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(6.0F, 14.776F, 6.224F, 15.0F, 6.5F, 15.0F)
          reflectiveCurveTo(7.0F, 14.776F, 7.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          close()        
      }
    }
    return _textboxAlignBottomRotate9020!!
  }

private var _textboxAlignBottomRotate9020: ImageVector? = null
