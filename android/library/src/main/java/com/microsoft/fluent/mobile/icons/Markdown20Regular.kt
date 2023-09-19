package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Markdown20: ImageVector
  get() {
    if (_markdown20 != null) {
      return _markdown20!!
    }
    _markdown20 = fluentIcon(name = "Regular.Markdown20", 20f) {
      materialPath {
          moveTo(16.0F, 4.5F)
          curveTo(16.0F, 4.224F, 15.776F, 4.0F, 15.5F, 4.0F)
          reflectiveCurveTo(15.0F, 4.224F, 15.0F, 4.5F)
          verticalLineToRelative(8.793F)
          lineToRelative(-1.146F, -1.147F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(16.0F, 13.293F)
          verticalLineTo(4.5F)
          close()
          moveTo(2.32F, 4.033F)
          curveTo(2.515F, 3.96F, 2.734F, 4.012F, 2.873F, 4.165F)
          lineTo(7.0F, 8.753F)
          lineToRelative(4.128F, -4.588F)
          curveToRelative(0.139F, -0.153F, 0.358F, -0.206F, 0.551F, -0.132F)
          curveTo(11.872F, 4.107F, 12.0F, 4.293F, 12.0F, 4.5F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(11.0F, 14.776F, 11.0F, 14.5F)
          verticalLineTo(5.803F)
          lineTo(7.372F, 9.835F)
          curveTo(7.277F, 9.94F, 7.142F, 10.0F, 7.0F, 10.0F)
          reflectiveCurveTo(6.723F, 9.94F, 6.628F, 9.835F)
          lineTo(3.0F, 5.803F)
          verticalLineTo(14.5F)
          curveTo(3.0F, 14.776F, 2.776F, 15.0F, 2.5F, 15.0F)
          reflectiveCurveTo(2.0F, 14.776F, 2.0F, 14.5F)
          verticalLineToRelative(-10.0F)
          curveToRelative(0.0F, -0.207F, 0.128F, -0.393F, 0.32F, -0.467F)
          close()        
      }
    }
    return _markdown20!!
  }

private var _markdown20: ImageVector? = null
