package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextWrap16: ImageVector
  get() {
    if (_textWrap16 != null) {
      return _textWrap16!!
    }
    _textWrap16 = fluentIcon(name = "Regular.TextWrap16", 16f) {
      materialPath {
          moveTo(2.0F, 3.5F)
          curveTo(2.0F, 3.224F, 2.224F, 3.0F, 2.5F, 3.0F)
          horizontalLineToRelative(11.0F)
          curveTo(13.776F, 3.0F, 14.0F, 3.224F, 14.0F, 3.5F)
          reflectiveCurveTo(13.776F, 4.0F, 13.5F, 4.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(2.224F, 4.0F, 2.0F, 3.776F, 2.0F, 3.5F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(2.0F, 7.224F, 2.224F, 7.0F, 2.5F, 7.0F)
          horizontalLineToRelative(10.0F)
          curveTo(13.88F, 7.0F, 15.0F, 8.12F, 15.0F, 9.5F)
          reflectiveCurveTo(13.88F, 12.0F, 12.5F, 12.0F)
          horizontalLineTo(9.707F)
          lineToRelative(0.647F, 0.646F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          lineToRelative(1.5F, -1.5F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(9.707F, 11.0F)
          horizontalLineTo(12.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(13.328F, 8.0F, 12.5F, 8.0F)
          horizontalLineToRelative(-10.0F)
          curveTo(2.224F, 8.0F, 2.0F, 7.776F, 2.0F, 7.5F)
          close()
          moveTo(6.0F, 11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(6.276F, 12.0F, 6.0F, 12.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 12.0F, 2.0F, 11.776F, 2.0F, 11.5F)
          reflectiveCurveTo(2.224F, 11.0F, 2.5F, 11.0F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _textWrap16!!
  }

private var _textWrap16: ImageVector? = null
