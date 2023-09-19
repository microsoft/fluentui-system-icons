package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextAsterisk20: ImageVector
  get() {
    if (_textAsterisk20 != null) {
      return _textAsterisk20!!
    }
    _textAsterisk20 = fluentIcon(name = "Regular.TextAsterisk20", 20f) {
      materialPath {
          moveTo(10.5F, 2.5F)
          curveTo(10.5F, 2.224F, 10.276F, 2.0F, 10.0F, 2.0F)
          reflectiveCurveTo(9.5F, 2.224F, 9.5F, 2.5F)
          verticalLineToRelative(6.293F)
          lineToRelative(-4.45F, -4.45F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(4.45F, 4.45F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 9.5F, 2.0F, 9.724F, 2.0F, 10.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(6.293F)
          lineToRelative(-4.45F, 4.45F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          lineToRelative(4.45F, -4.45F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-6.293F)
          lineToRelative(4.45F, 4.45F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-4.45F, -4.45F)
          horizontalLineTo(17.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineToRelative(-6.293F)
          lineToRelative(4.45F, -4.45F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-4.45F, 4.45F)
          verticalLineTo(2.5F)
          close()        
      }
    }
    return _textAsterisk20!!
  }

private var _textAsterisk20: ImageVector? = null
