package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlideSize20: ImageVector
  get() {
    if (_slideSize20 != null) {
      return _slideSize20!!
    }
    _slideSize20 = fluentIcon(name = "Filled.SlideSize20", 20f) {
      materialPath {
          moveTo(2.0F, 6.75F)
          curveTo(2.0F, 5.231F, 3.231F, 4.0F, 4.75F, 4.0F)
          horizontalLineToRelative(10.5F)
          curveTo(16.769F, 4.0F, 18.0F, 5.231F, 18.0F, 6.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineTo(4.75F)
          curveTo(3.231F, 16.0F, 2.0F, 14.769F, 2.0F, 13.25F)
          verticalLineToRelative(-6.5F)
          close()
          moveToRelative(9.0F, -0.25F)
          curveTo(11.0F, 6.776F, 11.224F, 7.0F, 11.5F, 7.0F)
          horizontalLineToRelative(0.793F)
          lineToRelative(-1.647F, 1.646F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.708F, 0.0F)
          lineTo(13.0F, 7.708F)
          verticalLineTo(8.5F)
          curveTo(13.0F, 8.776F, 13.224F, 9.0F, 13.5F, 9.0F)
          reflectiveCurveTo(14.0F, 8.776F, 14.0F, 8.5F)
          verticalLineToRelative(-2.0F)
          curveTo(14.0F, 6.224F, 13.776F, 6.0F, 13.5F, 6.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(11.224F, 6.0F, 11.0F, 6.224F, 11.0F, 6.5F)
          close()
          moveToRelative(-1.646F, 4.146F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineTo(7.0F, 12.293F)
          verticalLineTo(11.5F)
          curveTo(7.0F, 11.224F, 6.776F, 11.0F, 6.5F, 11.0F)
          reflectiveCurveTo(6.0F, 11.224F, 6.0F, 11.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.133F, 0.053F, 0.26F, 0.146F, 0.354F)
          curveTo(6.24F, 13.947F, 6.367F, 14.0F, 6.5F, 14.0F)
          horizontalLineToRelative(2.0F)
          curveTo(8.776F, 14.0F, 9.0F, 13.776F, 9.0F, 13.5F)
          reflectiveCurveTo(8.776F, 13.0F, 8.5F, 13.0F)
          horizontalLineTo(7.707F)
          lineToRelative(1.647F, -1.646F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _slideSize20!!
  }

private var _slideSize20: ImageVector? = null
