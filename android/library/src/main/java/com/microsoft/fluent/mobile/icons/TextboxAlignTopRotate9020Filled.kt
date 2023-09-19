package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextboxAlignTopRotate9020: ImageVector
  get() {
    if (_textboxAlignTopRotate9020 != null) {
      return _textboxAlignTopRotate9020!!
    }
    _textboxAlignTopRotate9020 = fluentIcon(name = "Filled.TextboxAlignTopRotate9020", 9020f) {
      materialPath {
          moveTo(5.0F, 3.0F)
          curveTo(3.895F, 3.0F, 3.0F, 3.895F, 3.0F, 5.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(5.5F, 2.0F)
          curveTo(10.776F, 5.0F, 11.0F, 5.224F, 11.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(10.0F, 14.776F, 10.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(10.0F, 5.224F, 10.224F, 5.0F, 10.5F, 5.0F)
          close()
          moveToRelative(3.0F, 0.0F)
          curveTo(13.776F, 5.0F, 14.0F, 5.224F, 14.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(13.0F, 14.776F, 13.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(13.0F, 5.224F, 13.224F, 5.0F, 13.5F, 5.0F)
          close()        
      }
    }
    return _textboxAlignTopRotate9020!!
  }

private var _textboxAlignTopRotate9020: ImageVector? = null
