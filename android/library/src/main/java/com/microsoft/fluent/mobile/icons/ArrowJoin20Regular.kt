package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowJoin20: ImageVector
  get() {
    if (_arrowJoin20 != null) {
      return _arrowJoin20!!
    }
    _arrowJoin20 = fluentIcon(name = "Regular.ArrowJoin20", 20f) {
      materialPath {
          moveTo(5.0F, 2.5F)
          curveTo(5.0F, 2.224F, 4.776F, 2.0F, 4.5F, 2.0F)
          reflectiveCurveTo(4.0F, 2.224F, 4.0F, 2.5F)
          curveToRelative(0.0F, 3.213F, 1.968F, 5.922F, 4.777F, 7.0F)
          curveTo(5.967F, 10.578F, 4.0F, 13.287F, 4.0F, 16.5F)
          curveTo(4.0F, 16.776F, 4.224F, 17.0F, 4.5F, 17.0F)
          reflectiveCurveTo(5.0F, 16.776F, 5.0F, 16.5F)
          curveToRelative(0.0F, -3.624F, 2.876F, -6.5F, 6.5F, -6.5F)
          horizontalLineToRelative(0.793F)
          lineToRelative(-1.147F, 1.146F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(12.293F, 9.0F)
          horizontalLineTo(11.5F)
          curveTo(7.876F, 9.0F, 5.0F, 6.124F, 5.0F, 2.5F)
          close()
          moveTo(8.5F, 4.0F)
          curveTo(8.224F, 4.0F, 8.0F, 4.224F, 8.0F, 4.5F)
          reflectiveCurveTo(8.224F, 5.0F, 8.5F, 5.0F)
          horizontalLineTo(15.0F)
          curveToRelative(0.524F, 0.0F, 1.0F, 0.476F, 1.0F, 1.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.524F, -0.476F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(8.5F)
          curveTo(8.224F, 14.0F, 8.0F, 14.224F, 8.0F, 14.5F)
          reflectiveCurveTo(8.224F, 15.0F, 8.5F, 15.0F)
          horizontalLineTo(15.0F)
          curveToRelative(1.076F, 0.0F, 2.0F, -0.924F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.076F, -0.924F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(8.5F)
          close()        
      }
    }
    return _arrowJoin20!!
  }

private var _arrowJoin20: ImageVector? = null
