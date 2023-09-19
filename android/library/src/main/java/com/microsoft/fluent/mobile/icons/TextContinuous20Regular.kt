package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextContinuous20: ImageVector
  get() {
    if (_textContinuous20 != null) {
      return _textContinuous20!!
    }
    _textContinuous20 = fluentIcon(name = "Regular.TextContinuous20", 20f) {
      materialPath {
          moveTo(2.0F, 5.5F)
          curveTo(2.0F, 5.224F, 2.224F, 5.0F, 2.5F, 5.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 5.0F, 18.0F, 5.224F, 18.0F, 5.5F)
          reflectiveCurveTo(17.776F, 6.0F, 17.5F, 6.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 6.0F, 2.0F, 5.776F, 2.0F, 5.5F)
          close()
          moveToRelative(0.0F, 9.0F)
          curveTo(2.0F, 14.224F, 2.224F, 14.0F, 2.5F, 14.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(17.776F, 15.0F, 17.5F, 15.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 15.0F, 2.0F, 14.776F, 2.0F, 14.5F)
          close()
          moveToRelative(1.353F, -6.354F)
          curveToRelative(-0.195F, -0.195F, -0.511F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineTo(3.793F, 10.0F)
          lineToRelative(-1.147F, 1.146F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(1.5F, -1.5F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-1.5F, -1.5F)
          close()
          moveTo(7.5F, 8.0F)
          horizontalLineToRelative(10.0F)
          curveTo(17.776F, 8.0F, 18.0F, 8.224F, 18.0F, 8.5F)
          reflectiveCurveTo(17.776F, 9.0F, 17.5F, 9.0F)
          horizontalLineToRelative(-10.0F)
          curveTo(7.224F, 9.0F, 7.0F, 8.776F, 7.0F, 8.5F)
          reflectiveCurveTo(7.224F, 8.0F, 7.5F, 8.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(7.224F, 11.0F, 7.0F, 11.224F, 7.0F, 11.5F)
          reflectiveCurveTo(7.224F, 12.0F, 7.5F, 12.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 11.0F, 17.5F, 11.0F)
          horizontalLineToRelative(-10.0F)
          close()        
      }
    }
    return _textContinuous20!!
  }

private var _textContinuous20: ImageVector? = null
