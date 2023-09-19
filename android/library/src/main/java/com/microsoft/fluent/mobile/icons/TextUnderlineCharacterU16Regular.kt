package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextUnderlineCharacterU16: ImageVector
  get() {
    if (_textUnderlineCharacterU16 != null) {
      return _textUnderlineCharacterU16!!
    }
    _textUnderlineCharacterU16 = fluentIcon(name = "Regular.TextUnderlineCharacterU16", 16f) {
      materialPath {
          moveTo(5.5F, 2.5F)
          curveTo(5.5F, 2.224F, 5.276F, 2.0F, 5.0F, 2.0F)
          reflectiveCurveTo(4.5F, 2.224F, 4.5F, 2.5F)
          verticalLineToRelative(5.0F)
          curveTo(4.5F, 9.433F, 6.067F, 11.0F, 8.0F, 11.0F)
          reflectiveCurveToRelative(3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-5.0F)
          curveTo(11.5F, 2.224F, 11.276F, 2.0F, 11.0F, 2.0F)
          reflectiveCurveToRelative(-0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(5.0F)
          curveTo(10.5F, 8.88F, 9.38F, 10.0F, 8.0F, 10.0F)
          reflectiveCurveTo(5.5F, 8.88F, 5.5F, 7.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveTo(4.5F, 13.0F)
          curveTo(4.224F, 13.0F, 4.0F, 13.224F, 4.0F, 13.5F)
          reflectiveCurveTo(4.224F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.776F, 13.0F, 11.5F, 13.0F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _textUnderlineCharacterU16!!
  }

private var _textUnderlineCharacterU16: ImageVector? = null
