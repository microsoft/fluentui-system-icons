package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextAlignCenter20: ImageVector
  get() {
    if (_textAlignCenter20 != null) {
      return _textAlignCenter20!!
    }
    _textAlignCenter20 = fluentIcon(name = "Regular.TextAlignCenter20", 20f) {
      materialPath {
          moveTo(4.0F, 4.5F)
          curveTo(4.0F, 4.224F, 4.224F, 4.0F, 4.5F, 4.0F)
          horizontalLineToRelative(11.0F)
          curveTo(15.776F, 4.0F, 16.0F, 4.224F, 16.0F, 4.5F)
          reflectiveCurveTo(15.776F, 5.0F, 15.5F, 5.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(4.224F, 5.0F, 4.0F, 4.776F, 4.0F, 4.5F)
          close()
          moveToRelative(-2.0F, 5.0F)
          curveTo(2.0F, 9.224F, 2.224F, 9.0F, 2.5F, 9.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 9.0F, 18.0F, 9.224F, 18.0F, 9.5F)
          reflectiveCurveTo(17.776F, 10.0F, 17.5F, 10.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 10.0F, 2.0F, 9.776F, 2.0F, 9.5F)
          close()
          moveTo(6.5F, 14.0F)
          curveTo(6.224F, 14.0F, 6.0F, 14.224F, 6.0F, 14.5F)
          reflectiveCurveTo(6.224F, 15.0F, 6.5F, 15.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 14.0F, 13.5F, 14.0F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _textAlignCenter20!!
  }

private var _textAlignCenter20: ImageVector? = null
