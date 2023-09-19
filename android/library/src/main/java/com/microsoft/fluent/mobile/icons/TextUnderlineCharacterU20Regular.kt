package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextUnderlineCharacterU20: ImageVector
  get() {
    if (_textUnderlineCharacterU20 != null) {
      return _textUnderlineCharacterU20!!
    }
    _textUnderlineCharacterU20 = fluentIcon(name = "Regular.TextUnderlineCharacterU20", 20f) {
      materialPath {
          moveTo(7.0F, 3.5F)
          curveTo(7.0F, 3.224F, 6.776F, 3.0F, 6.5F, 3.0F)
          reflectiveCurveTo(6.0F, 3.224F, 6.0F, 3.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 2.21F, 1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          verticalLineTo(3.5F)
          curveTo(14.0F, 3.224F, 13.776F, 3.0F, 13.5F, 3.0F)
          reflectiveCurveTo(13.0F, 3.224F, 13.0F, 3.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(3.5F)
          close()
          moveTo(5.5F, 16.0F)
          curveTo(5.224F, 16.0F, 5.0F, 16.224F, 5.0F, 16.5F)
          reflectiveCurveTo(5.224F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.776F, 16.0F, 14.5F, 16.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _textUnderlineCharacterU20!!
  }

private var _textUnderlineCharacterU20: ImageVector? = null
