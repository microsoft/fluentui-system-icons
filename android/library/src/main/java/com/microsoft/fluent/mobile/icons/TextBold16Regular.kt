package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextBold16: ImageVector
  get() {
    if (_textBold16 != null) {
      return _textBold16!!
    }
    _textBold16 = fluentIcon(name = "Regular.TextBold16", 16f) {
      materialPath {
          moveTo(4.0F, 3.1F)
          curveTo(4.0F, 2.5F, 4.5F, 2.0F, 5.1F, 2.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(2.1F, 0.0F, 3.4F, 1.4F, 3.4F, 3.4F)
          curveToRelative(0.0F, 0.9F, -0.3F, 2.0F, -0.7F, 2.6F)
          curveToRelative(0.8F, 0.6F, 1.4F, 1.2F, 1.4F, 2.5F)
          curveToRelative(0.0F, 2.7F, -2.1F, 3.5F, -3.6F, 3.5F)
          horizontalLineTo(5.1F)
          curveTo(4.5F, 14.0F, 4.0F, 13.5F, 4.0F, 12.9F)
          verticalLineTo(3.1F)
          close()
          moveTo(6.0F, 9.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(2.4F)
          curveToRelative(0.7F, 0.0F, 1.5F, -0.5F, 1.5F, -1.5F)
          reflectiveCurveTo(9.1F, 9.0F, 8.4F, 9.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(0.0F, -2.0F)
          horizontalLineToRelative(2.2F)
          curveToRelative(0.9F, 0.0F, 1.5F, -0.7F, 1.5F, -1.5F)
          reflectiveCurveTo(9.1F, 4.0F, 8.3F, 4.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.0F)
          close()        
      }
    }
    return _textBold16!!
  }

private var _textBold16: ImageVector? = null
