package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowImport20: ImageVector
  get() {
    if (_arrowImport20 != null) {
      return _arrowImport20!!
    }
    _arrowImport20 = fluentIcon(name = "Regular.ArrowImport20", 20f) {
      materialPath {
          moveTo(17.5F, 4.0F)
          curveTo(17.776F, 4.0F, 18.0F, 4.224F, 18.0F, 4.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(17.0F, 15.776F, 17.0F, 15.5F)
          verticalLineToRelative(-11.0F)
          curveTo(17.0F, 4.224F, 17.224F, 4.0F, 17.5F, 4.0F)
          close()
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(10.793F)
          lineToRelative(-3.147F, -3.146F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.048F, 0.048F, 0.084F, 0.104F, 0.108F, 0.163F)
          curveTo(14.986F, 9.867F, 15.0F, 9.93F, 15.0F, 9.997F)
          verticalLineToRelative(0.006F)
          curveToRelative(0.0F, 0.127F, -0.05F, 0.254F, -0.146F, 0.35F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(3.147F, -3.146F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 10.5F, 2.0F, 10.276F, 2.0F, 10.0F)
          close()        
      }
    }
    return _arrowImport20!!
  }

private var _arrowImport20: ImageVector? = null
