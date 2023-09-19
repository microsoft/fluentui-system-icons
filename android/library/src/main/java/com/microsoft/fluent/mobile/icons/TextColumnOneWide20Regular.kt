package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextColumnOneWide20: ImageVector
  get() {
    if (_textColumnOneWide20 != null) {
      return _textColumnOneWide20!!
    }
    _textColumnOneWide20 = fluentIcon(name = "Regular.TextColumnOneWide20", 20f) {
      materialPath {
          moveTo(3.5F, 5.0F)
          curveTo(3.224F, 5.0F, 3.0F, 5.224F, 3.0F, 5.5F)
          reflectiveCurveTo(3.224F, 6.0F, 3.5F, 6.0F)
          horizontalLineToRelative(13.0F)
          curveTo(16.776F, 6.0F, 17.0F, 5.776F, 17.0F, 5.5F)
          reflectiveCurveTo(16.776F, 5.0F, 16.5F, 5.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(3.224F, 8.0F, 3.0F, 8.224F, 3.0F, 8.5F)
          reflectiveCurveTo(3.224F, 9.0F, 3.5F, 9.0F)
          horizontalLineToRelative(13.0F)
          curveTo(16.776F, 9.0F, 17.0F, 8.776F, 17.0F, 8.5F)
          reflectiveCurveTo(16.776F, 8.0F, 16.5F, 8.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveTo(3.0F, 11.5F)
          curveTo(3.0F, 11.224F, 3.224F, 11.0F, 3.5F, 11.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(16.776F, 12.0F, 16.5F, 12.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 12.0F, 3.0F, 11.776F, 3.0F, 11.5F)
          close()
          moveTo(3.5F, 14.0F)
          curveTo(3.224F, 14.0F, 3.0F, 14.224F, 3.0F, 14.5F)
          reflectiveCurveTo(3.224F, 15.0F, 3.5F, 15.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.776F, 14.0F, 16.5F, 14.0F)
          horizontalLineToRelative(-13.0F)
          close()        
      }
    }
    return _textColumnOneWide20!!
  }

private var _textColumnOneWide20: ImageVector? = null
