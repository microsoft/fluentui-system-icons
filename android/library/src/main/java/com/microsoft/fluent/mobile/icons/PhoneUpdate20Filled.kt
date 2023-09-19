package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneUpdate20: ImageVector
  get() {
    if (_phoneUpdate20 != null) {
      return _phoneUpdate20!!
    }
    _phoneUpdate20 = fluentIcon(name = "Filled.PhoneUpdate20", 20f) {
      materialPath {
          moveTo(5.0F, 3.5F)
          curveTo(5.0F, 2.672F, 5.672F, 2.0F, 6.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(14.328F, 2.0F, 15.0F, 2.672F, 15.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(5.672F, 18.0F, 5.0F, 17.328F, 5.0F, 16.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveToRelative(5.5F, 3.0F)
          curveTo(10.5F, 6.224F, 10.276F, 6.0F, 10.0F, 6.0F)
          reflectiveCurveTo(9.5F, 6.224F, 9.5F, 6.5F)
          verticalLineToRelative(5.793F)
          lineToRelative(-1.146F, -1.147F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(10.5F, 12.293F)
          verticalLineTo(6.5F)
          close()        
      }
    }
    return _phoneUpdate20!!
  }

private var _phoneUpdate20: ImageVector? = null
