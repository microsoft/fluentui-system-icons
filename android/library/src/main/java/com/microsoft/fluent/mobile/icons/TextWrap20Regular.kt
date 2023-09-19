package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextWrap20: ImageVector
  get() {
    if (_textWrap20 != null) {
      return _textWrap20!!
    }
    _textWrap20 = fluentIcon(name = "Regular.TextWrap20", 20f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 4.224F, 2.224F, 4.0F, 2.5F, 4.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 4.0F, 18.0F, 4.224F, 18.0F, 4.5F)
          reflectiveCurveTo(17.776F, 5.0F, 17.5F, 5.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 5.0F, 2.0F, 4.776F, 2.0F, 4.5F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveTo(2.0F, 9.224F, 2.224F, 9.0F, 2.5F, 9.0F)
          horizontalLineTo(16.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineToRelative(-4.293F)
          lineToRelative(0.647F, 0.646F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(1.5F, -1.5F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(11.707F, 14.0F)
          horizontalLineTo(16.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 10.0F, 2.0F, 9.776F, 2.0F, 9.5F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveTo(2.0F, 14.224F, 2.224F, 14.0F, 2.5F, 14.0F)
          horizontalLineToRelative(5.0F)
          curveTo(7.776F, 14.0F, 8.0F, 14.224F, 8.0F, 14.5F)
          reflectiveCurveTo(7.776F, 15.0F, 7.5F, 15.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(2.224F, 15.0F, 2.0F, 14.776F, 2.0F, 14.5F)
          close()        
      }
    }
    return _textWrap20!!
  }

private var _textWrap20: ImageVector? = null
