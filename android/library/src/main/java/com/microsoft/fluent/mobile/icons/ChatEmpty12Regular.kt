package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChatEmpty12: ImageVector
  get() {
    if (_chatEmpty12 != null) {
      return _chatEmpty12!!
    }
    _chatEmpty12 = fluentIcon(name = "Regular.ChatEmpty12", 12f) {
      materialPath {
          moveTo(1.0F, 6.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          curveToRelative(-0.873F, 0.0F, -1.694F, -0.224F, -2.41F, -0.618F)
          lineToRelative(-1.944F, 0.592F)
          curveToRelative(-0.177F, 0.054F, -0.369F, 0.006F, -0.5F, -0.125F)
          curveToRelative(-0.13F, -0.13F, -0.178F, -0.322F, -0.124F, -0.499F)
          lineToRelative(0.592F, -1.947F)
          curveTo(1.223F, 7.689F, 1.0F, 6.87F, 1.0F, 6.0F)
          close()
          moveToRelative(5.0F, -4.0F)
          curveTo(3.79F, 2.0F, 2.0F, 3.79F, 2.0F, 6.0F)
          curveToRelative(0.0F, 0.763F, 0.213F, 1.474F, 0.583F, 2.08F)
          curveToRelative(0.074F, 0.122F, 0.093F, 0.27F, 0.051F, 0.406F)
          lineTo(2.251F, 9.745F)
          lineToRelative(1.257F, -0.383F)
          curveTo(3.645F, 9.32F, 3.793F, 9.34F, 3.914F, 9.414F)
          curveTo(4.521F, 9.786F, 5.234F, 10.0F, 6.0F, 10.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveTo(8.21F, 2.0F, 6.0F, 2.0F)
          close()        
      }
    }
    return _chatEmpty12!!
  }

private var _chatEmpty12: ImageVector? = null
