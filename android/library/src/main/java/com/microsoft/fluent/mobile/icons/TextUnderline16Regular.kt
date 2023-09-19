package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextUnderline16: ImageVector
  get() {
    if (_textUnderline16 != null) {
      return _textUnderline16!!
    }
    _textUnderline16 = fluentIcon(name = "Regular.TextUnderline16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(4.776F, 2.0F, 5.0F, 2.224F, 5.0F, 2.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 1.624F, 1.376F, 3.0F, 3.0F, 3.0F)
          reflectiveCurveToRelative(3.0F, -1.376F, 3.0F, -3.0F)
          verticalLineTo(2.5F)
          curveTo(11.0F, 2.224F, 11.224F, 2.0F, 11.5F, 2.0F)
          reflectiveCurveTo(12.0F, 2.224F, 12.0F, 2.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 2.176F, -1.824F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.824F, -4.0F, -4.0F)
          verticalLineTo(2.5F)
          curveTo(4.0F, 2.224F, 4.224F, 2.0F, 4.5F, 2.0F)
          close()
          moveTo(4.0F, 13.5F)
          curveTo(4.0F, 13.224F, 4.224F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(11.776F, 14.0F, 11.5F, 14.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(4.224F, 14.0F, 4.0F, 13.776F, 4.0F, 13.5F)
          close()        
      }
    }
    return _textUnderline16!!
  }

private var _textUnderline16: ImageVector? = null
