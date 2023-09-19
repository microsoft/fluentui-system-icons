package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextFirstLine20: ImageVector
  get() {
    if (_textFirstLine20 != null) {
      return _textFirstLine20!!
    }
    _textFirstLine20 = fluentIcon(name = "Regular.TextFirstLine20", 20f) {
      materialPath {
          moveTo(16.646F, 3.147F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(16.207F, 5.0F)
          lineToRelative(1.147F, 1.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(1.5F, -1.5F)
          close()
          moveTo(12.5F, 4.0F)
          curveTo(12.776F, 4.0F, 13.0F, 4.224F, 13.0F, 4.5F)
          reflectiveCurveTo(12.776F, 5.0F, 12.5F, 5.0F)
          horizontalLineToRelative(-10.0F)
          curveTo(2.224F, 5.0F, 2.0F, 4.776F, 2.0F, 4.5F)
          reflectiveCurveTo(2.224F, 4.0F, 2.5F, 4.0F)
          horizontalLineToRelative(10.0F)
          close()
          moveToRelative(5.0F, 10.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(17.776F, 15.0F, 17.5F, 15.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 15.0F, 2.0F, 14.776F, 2.0F, 14.5F)
          reflectiveCurveTo(2.224F, 14.0F, 2.5F, 14.0F)
          horizontalLineToRelative(15.0F)
          close()
          moveTo(18.0F, 9.5F)
          curveTo(18.0F, 9.224F, 17.776F, 9.0F, 17.5F, 9.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 9.0F, 2.0F, 9.224F, 2.0F, 9.5F)
          reflectiveCurveTo(2.224F, 10.0F, 2.5F, 10.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          close()        
      }
    }
    return _textFirstLine20!!
  }

private var _textFirstLine20: ImageVector? = null
