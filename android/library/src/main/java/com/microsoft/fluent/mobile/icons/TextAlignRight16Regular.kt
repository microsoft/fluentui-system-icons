package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextAlignRight16: ImageVector
  get() {
    if (_textAlignRight16 != null) {
      return _textAlignRight16!!
    }
    _textAlignRight16 = fluentIcon(name = "Regular.TextAlignRight16", 16f) {
      materialPath {
          moveTo(5.0F, 3.5F)
          curveTo(5.0F, 3.224F, 5.224F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(14.776F, 3.0F, 15.0F, 3.224F, 15.0F, 3.5F)
          reflectiveCurveTo(14.776F, 4.0F, 14.5F, 4.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(5.224F, 4.0F, 5.0F, 3.776F, 5.0F, 3.5F)
          close()
          moveToRelative(-4.0F, 4.0F)
          curveTo(1.0F, 7.224F, 1.224F, 7.0F, 1.5F, 7.0F)
          horizontalLineToRelative(13.0F)
          curveTo(14.776F, 7.0F, 15.0F, 7.224F, 15.0F, 7.5F)
          reflectiveCurveTo(14.776F, 8.0F, 14.5F, 8.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(1.224F, 8.0F, 1.0F, 7.776F, 1.0F, 7.5F)
          close()
          moveToRelative(8.0F, 4.0F)
          curveTo(9.0F, 11.224F, 9.224F, 11.0F, 9.5F, 11.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(14.776F, 12.0F, 14.5F, 12.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(9.224F, 12.0F, 9.0F, 11.776F, 9.0F, 11.5F)
          close()        
      }
    }
    return _textAlignRight16!!
  }

private var _textAlignRight16: ImageVector? = null
