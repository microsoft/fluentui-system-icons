package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextDescriptionLtr20: ImageVector
  get() {
    if (_textDescriptionLtr20 != null) {
      return _textDescriptionLtr20!!
    }
    _textDescriptionLtr20 = fluentIcon(name = "Regular.TextDescriptionLtr20", 20f) {
      materialPath {
          moveTo(2.5F, 5.0F)
          curveTo(2.224F, 5.0F, 2.0F, 5.224F, 2.0F, 5.5F)
          reflectiveCurveTo(2.224F, 6.0F, 2.5F, 6.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 6.0F, 18.0F, 5.776F, 18.0F, 5.5F)
          reflectiveCurveTo(17.776F, 5.0F, 17.5F, 5.0F)
          horizontalLineToRelative(-15.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(2.224F, 8.0F, 2.0F, 8.224F, 2.0F, 8.5F)
          reflectiveCurveTo(2.224F, 9.0F, 2.5F, 9.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 9.0F, 18.0F, 8.776F, 18.0F, 8.5F)
          reflectiveCurveTo(17.776F, 8.0F, 17.5F, 8.0F)
          horizontalLineToRelative(-15.0F)
          close()
          moveTo(2.0F, 11.5F)
          curveTo(2.0F, 11.224F, 2.224F, 11.0F, 2.5F, 11.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(17.776F, 12.0F, 17.5F, 12.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 12.0F, 2.0F, 11.776F, 2.0F, 11.5F)
          close()
          moveTo(2.5F, 14.0F)
          curveTo(2.224F, 14.0F, 2.0F, 14.224F, 2.0F, 14.5F)
          reflectiveCurveTo(2.224F, 15.0F, 2.5F, 15.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(12.776F, 14.0F, 12.5F, 14.0F)
          horizontalLineToRelative(-10.0F)
          close()        
      }
    }
    return _textDescriptionLtr20!!
  }

private var _textDescriptionLtr20: ImageVector? = null
