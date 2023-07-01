package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextBold16: ImageVector
  get() {
    if (_textBold16 != null) {
      return _textBold16!!
    }
    _textBold16 = fluentIcon(name = "Filled.TextBold16", 16f) {
      materialPath {
          moveTo(4.0F, 3.3F)
          curveTo(4.0F, 2.6F, 4.6F, 2.0F, 5.3F, 2.0F)
          horizontalLineToRelative(3.3F)
          curveToRelative(2.0F, 0.0F, 3.5F, 1.7F, 3.5F, 3.5F)
          curveToRelative(0.0F, 0.7F, -0.2F, 1.4F, -0.6F, 1.9F)
          curveToRelative(0.7F, 0.6F, 1.2F, 1.6F, 1.2F, 2.8F)
          curveToRelative(0.0F, 2.4F, -2.0F, 3.7F, -3.7F, 3.7F)
          horizontalLineTo(5.3F)
          curveTo(4.6F, 14.0F, 4.0F, 13.4F, 4.0F, 12.7F)
          verticalLineTo(3.3F)
          close()
          moveToRelative(2.6F, 1.3F)
          verticalLineToRelative(1.9F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.5F, 0.0F, 1.0F, -0.4F, 1.0F, -1.0F)
          curveToRelative(0.0F, -0.5F, -0.4F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(0.1F)
          close()
          moveToRelative(0.0F, 4.5F)
          verticalLineToRelative(2.4F)
          horizontalLineTo(9.0F)
          curveToRelative(0.6F, 0.0F, 1.2F, -0.5F, 1.2F, -1.2F)
          reflectiveCurveTo(9.6F, 9.1F, 9.0F, 9.1F)
          horizontalLineTo(6.6F)
          close()        
      }
    }
    return _textBold16!!
  }

private var _textBold16: ImageVector? = null
