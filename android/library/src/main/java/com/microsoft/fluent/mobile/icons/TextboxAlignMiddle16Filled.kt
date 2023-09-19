package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextboxAlignMiddle16: ImageVector
  get() {
    if (_textboxAlignMiddle16 != null) {
      return _textboxAlignMiddle16!!
    }
    _textboxAlignMiddle16 = fluentIcon(name = "Filled.TextboxAlignMiddle16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(5.0F, 6.5F)
          curveTo(5.0F, 6.224F, 5.224F, 6.0F, 5.5F, 6.0F)
          horizontalLineToRelative(5.0F)
          curveTo(10.776F, 6.0F, 11.0F, 6.224F, 11.0F, 6.5F)
          reflectiveCurveTo(10.776F, 7.0F, 10.5F, 7.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(5.224F, 7.0F, 5.0F, 6.776F, 5.0F, 6.5F)
          close()
          moveTo(5.5F, 9.0F)
          horizontalLineToRelative(5.0F)
          curveTo(10.776F, 9.0F, 11.0F, 9.224F, 11.0F, 9.5F)
          reflectiveCurveTo(10.776F, 10.0F, 10.5F, 10.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(5.224F, 10.0F, 5.0F, 9.776F, 5.0F, 9.5F)
          reflectiveCurveTo(5.224F, 9.0F, 5.5F, 9.0F)
          close()        
      }
    }
    return _textboxAlignMiddle16!!
  }

private var _textboxAlignMiddle16: ImageVector? = null
