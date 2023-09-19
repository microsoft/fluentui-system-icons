package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlagOff16: ImageVector
  get() {
    if (_flagOff16 != null) {
      return _flagOff16!!
    }
    _flagOff16 = fluentIcon(name = "Regular.FlagOff16", 16f) {
      materialPath {
          moveTo(9.293F, 10.0F)
          lineToRelative(4.853F, 4.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(3.0F, 3.707F)
          verticalLineTo(13.5F)
          curveTo(3.0F, 13.776F, 3.224F, 14.0F, 3.5F, 14.0F)
          reflectiveCurveTo(4.0F, 13.776F, 4.0F, 13.5F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(5.293F)
          close()
          moveToRelative(-1.0F, -1.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(4.707F)
          lineTo(8.293F, 9.0F)
          close()
          moveToRelative(3.735F, 0.0F)
          horizontalLineToRelative(-0.907F)
          lineToRelative(1.0F, 1.0F)
          horizontalLineTo(13.0F)
          curveToRelative(0.407F, 0.0F, 0.643F, -0.46F, 0.407F, -0.79F)
          lineTo(11.114F, 6.0F)
          lineToRelative(2.293F, -3.21F)
          curveTo(13.643F, 2.46F, 13.407F, 2.0F, 13.0F, 2.0F)
          horizontalLineTo(4.121F)
          lineToRelative(1.0F, 1.0F)
          horizontalLineToRelative(6.907F)
          lineToRelative(-1.935F, 2.71F)
          curveToRelative(-0.124F, 0.173F, -0.124F, 0.407F, 0.0F, 0.58F)
          lineTo(12.028F, 9.0F)
          close()        
      }
    }
    return _flagOff16!!
  }

private var _flagOff16: ImageVector? = null
