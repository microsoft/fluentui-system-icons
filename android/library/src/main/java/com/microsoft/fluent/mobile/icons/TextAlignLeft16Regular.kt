package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextAlignLeft16: ImageVector
  get() {
    if (_textAlignLeft16 != null) {
      return _textAlignLeft16!!
    }
    _textAlignLeft16 = fluentIcon(name = "Regular.TextAlignLeft16", 16f) {
      materialPath {
          moveTo(1.0F, 3.5F)
          curveTo(1.0F, 3.224F, 1.224F, 3.0F, 1.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(10.776F, 3.0F, 11.0F, 3.224F, 11.0F, 3.5F)
          reflectiveCurveTo(10.776F, 4.0F, 10.5F, 4.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(1.224F, 4.0F, 1.0F, 3.776F, 1.0F, 3.5F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(1.0F, 7.224F, 1.224F, 7.0F, 1.5F, 7.0F)
          horizontalLineToRelative(13.0F)
          curveTo(14.776F, 7.0F, 15.0F, 7.224F, 15.0F, 7.5F)
          reflectiveCurveTo(14.776F, 8.0F, 14.5F, 8.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(1.224F, 8.0F, 1.0F, 7.776F, 1.0F, 7.5F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(1.0F, 11.224F, 1.224F, 11.0F, 1.5F, 11.0F)
          horizontalLineToRelative(5.0F)
          curveTo(6.776F, 11.0F, 7.0F, 11.224F, 7.0F, 11.5F)
          reflectiveCurveTo(6.776F, 12.0F, 6.5F, 12.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(1.224F, 12.0F, 1.0F, 11.776F, 1.0F, 11.5F)
          close()        
      }
    }
    return _textAlignLeft16!!
  }

private var _textAlignLeft16: ImageVector? = null
