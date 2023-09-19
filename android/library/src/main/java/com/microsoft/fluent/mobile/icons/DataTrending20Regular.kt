package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DataTrending20: ImageVector
  get() {
    if (_dataTrending20 != null) {
      return _dataTrending20!!
    }
    _dataTrending20 = fluentIcon(name = "Regular.DataTrending20", 20f) {
      materialPath {
          moveTo(4.0F, 3.5F)
          curveTo(4.0F, 3.224F, 3.776F, 3.0F, 3.5F, 3.0F)
          reflectiveCurveTo(3.0F, 3.224F, 3.0F, 3.5F)
          verticalLineToRelative(11.0F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.776F, 16.0F, 16.5F, 16.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(4.672F, 16.0F, 4.0F, 15.328F, 4.0F, 14.5F)
          verticalLineToRelative(-11.0F)
          close()
          moveTo(12.5F, 5.0F)
          curveTo(12.224F, 5.0F, 12.0F, 5.224F, 12.0F, 5.5F)
          reflectiveCurveTo(12.224F, 6.0F, 12.5F, 6.0F)
          horizontalLineToRelative(2.793F)
          lineTo(11.0F, 10.293F)
          lineTo(9.354F, 8.647F)
          curveTo(9.26F, 8.553F, 9.133F, 8.5F, 9.0F, 8.5F)
          curveToRelative(-0.133F, 0.0F, -0.26F, 0.053F, -0.354F, 0.146F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineTo(9.0F, 9.707F)
          lineToRelative(1.646F, 1.647F)
          curveTo(10.74F, 11.447F, 10.867F, 11.5F, 11.0F, 11.5F)
          curveToRelative(0.133F, 0.0F, 0.26F, -0.053F, 0.354F, -0.146F)
          lineTo(16.0F, 6.707F)
          verticalLineTo(9.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(17.0F, 9.776F, 17.0F, 9.5F)
          verticalLineToRelative(-4.0F)
          curveTo(17.0F, 5.224F, 16.776F, 5.0F, 16.5F, 5.0F)
          horizontalLineToRelative(-4.0F)
          close()        
      }
    }
    return _dataTrending20!!
  }

private var _dataTrending20: ImageVector? = null
