package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextUnderline20: ImageVector
  get() {
    if (_textUnderline20 != null) {
      return _textUnderline20!!
    }
    _textUnderline20 = fluentIcon(name = "Regular.TextUnderline20", 20f) {
      materialPath {
          moveTo(6.0F, 3.5F)
          curveTo(6.0F, 3.224F, 5.776F, 3.0F, 5.5F, 3.0F)
          reflectiveCurveTo(5.0F, 3.224F, 5.0F, 3.5F)
          verticalLineToRelative(6.454F)
          curveTo(5.0F, 12.736F, 7.234F, 15.0F, 10.0F, 15.0F)
          reflectiveCurveToRelative(5.0F, -2.264F, 5.0F, -5.046F)
          verticalLineTo(3.5F)
          curveTo(15.0F, 3.224F, 14.776F, 3.0F, 14.5F, 3.0F)
          reflectiveCurveTo(14.0F, 3.224F, 14.0F, 3.5F)
          verticalLineToRelative(6.454F)
          curveTo(14.0F, 12.194F, 12.204F, 14.0F, 10.0F, 14.0F)
          curveToRelative(-2.204F, 0.0F, -4.0F, -1.806F, -4.0F, -4.046F)
          verticalLineTo(3.5F)
          close()
          moveToRelative(-1.0F, 13.0F)
          curveTo(5.0F, 16.224F, 5.224F, 16.0F, 5.5F, 16.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(14.776F, 17.0F, 14.5F, 17.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(5.224F, 17.0F, 5.0F, 16.776F, 5.0F, 16.5F)
          close()        
      }
    }
    return _textUnderline20!!
  }

private var _textUnderline20: ImageVector? = null
